田振民u

mysql中文查询为空集时

找到mysql安装地址根目录找到其中的my.ini文件，用IDE打开,找到[client]如果其后有default-character-set字段，设置其值为gb2312可实现查询中文字段

mysql无法启动问题，1067错误
找到注册表信息 win+r 输入regedit打开注册表
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\MySQL   修改ImagePath为正确的安装目录

npm install ueditor --force