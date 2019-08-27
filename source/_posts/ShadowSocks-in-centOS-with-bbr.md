---
title: ShadowSocks_in_centOS_with_bbr
date: 2019-08-27 14:58:38
tags:
---

由于只有CN国内才会有翻墙需求，所以这篇文章就用中文来写了，嘎嘎，以下也都是基于MacOS的教程

### 准备篇

购买一台国外主机，目前我在用的是 [hostinger](https://www.hostinger.com/), 相比之前用过的搬瓦工稳定很多，这边也给大家安利一波，而且它的管理后台也比较清晰和新潮。

> 这边会拿到你VPS的 ip , pwd, port  (IP,密码,端口)

### SSH登录你的VPS

```shell
ssh -p port username@ip
```
> username一般是root,然后按照提示输入密码 pwd, 成功登入vps

### 安装pip

```shell
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
```

```shell
python get-pip.py
```

### 安装Shadowsocks

```shell
pip install shadowsocks
```

### 配置Shadowsocks
- 单端口（个人用）
```bash
    {
        "server":"0.0.0.0",
        "server_port":9001,
        "local_port":1080,
        "password":"1234567890",
        "timeout":600,
        "method":"aes-256-cfb"
    }
```
- 多端口(多用户使用)
```bash
    {
        "server": "0.0.0.0", 
        "local_address": "127.0.0.1",
        "local_port":1080,
        "port_password": {
            "9001": "1234",
            "9002": "1234",
            "9003": "1234"
        },
        "timeout":600,//超时时间
        "method":"aes-256-cfb", //加密方式
        "fast_open": false //需要服务端支持
    }
```
> 这边有个注意点就是需要将端口加入到防火墙白名单,将上述多端口加入到开启端口列表中

```shell
    # 安装防火墙
    yum install firewalld
    # 启动防火墙
    systemctl start firewalld
    # 查看目前已经开启的端口号
    firewall-cmd --list-ports
    # 端口号是你自己设置的端口
    firewall-cmd --permanent --zone=public --add-port=9001/tcp
    firewall-cmd --permanent --zone=public --add-port=9002/tcp
    firewall-cmd --permanent --zone=public --add-port=9003/tcp
    # 重载更新的端口信息
    firewall-cmd --reload
```

### 将ShadowSocks加入到系统服务中并启用
- 编辑文件命令
```shell
 vi /etc/systemd/system/shadowsocks.service
```
- 粘贴如下命令
```shell
    [Unit]
    Description=Shadowsocks
    [Service]
    TimeoutStartSec=0
    ExecStart=/usr/bin/ssserver -c /etc/shadowsocks.json
    [Install]
    WantedBy=multi-user.target
```

- 启用ShadowSocks服务 并设置为开机启动
 ```shell
    # 设置开机自启命令
    systemctl enable shadowsocks

    # 启动命令
    systemctl start shadowsocks

    #查看状态命令
    systemctl status shadowsocks
 ```

### BBR加速（适用于openVZ架构）

BBR安装脚本
```shell
    wget https://github.com/tcp-nanqinlang/lkl-rinetd/releases/download/1.1.0-nocheckvirt/tcp_nanqinlang-rinetd-centos-nocheckvirt.sh
    bash tcp_nanqinlang-rinetd-centos-nocheckvirt.sh
```
> 安装过程中，会提示输入端口号。多个端口号用空格隔开。不支持端口段。
   安装完成后，会开启rinetd-bbr。以后重启机器也会随开机自启。

### ShadowSocks 客户端
- MacOS [ https://github.com/shadowsocks/ShadowsocksX-NG]( https://github.com/shadowsocks/ShadowsocksX-NG)
- ios 可以自己去搞一个apple 美区帐号 下载一个
- Android 好像很多

### 完成以上操作，就可以科学上网了，1080P 油管无压力～