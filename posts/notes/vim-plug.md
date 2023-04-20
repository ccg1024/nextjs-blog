---
title: 'Vim-Plug'
date: '2022-03-07'
description: 'A vim/neovim plugin management tool'
---

# Introduce

一个小巧的 vim 插件管理工具，设置简单，使用方便。工具地址：https://github.com/junegunn/vim-plug 。

# 安装

直接下载 github 页面中 `plug.vim` 文件，将其放入本机 vim 的 `autoload` 文件夹中。

## windows

> 2022/7/22 修正 windows 路径。

放在 gvim 安装目录的 `autoload/`文件夹下。例，gvim 安装路径为`D:/vim82`时，`plug.vim`放路径为`D:/vim82/autoload/plug.vim`。

或者放在 github 中给出的`$HOME/vimfiles/autoload/plug.vim`路径中。通常，windows 下的环境变量`HOME`表示路径`C:/Users/<your_user_name>/`。在 powershell 中通过`echo $HOME`可以查看路径。

## Mac

一般在 `~/.vim/autoload/` 文件夹下。没有可以自己创建。

# 使用

在 vim 配置文件 `.vimrc` (gvim 为`_vimrc`) 中添加如下信息。

```vim
call plug#begin('~/.vim/plugged')
" 路径可更改

" 这里填写需要安装的插件
" 安装 gruvbox 主题，与 airline 插件为例
Plug 'morhetz/gruvbox'
Plug 'vim-airline/vim-airline'

call plug#end()
```

上面是通过 vim-plug 安装 vim 主题 gruvbox 与 airline 插件的例子，其中，`~/.vim/plugged` 是下载的插件存放路径，可设置自己想要的路径。想要安装的插件放在两个 `call` 中间即可。格式为 `Plug + github上的项目名` 。

编辑保存后重新打开 vim，输入命令 `:PlugInstall` ，将自动下载上面填写的插件。

![安装界面](D:/GitProject/blog/public/images/notes/vim-plug/install.png)

> vim 编辑器只有在打开的时候加载一次配置文件，使用途中配置文件修改不会影响到当前的 vim，所以需要重新启动。或者在当前 vim 窗口运行命令 `:source $MYVIMRC` 手动重新加载配置文件。`$MYVIMRC` 变量存放的是 vim 默认配置文件路径。可使用 `:echo` 命令查看，新安装的 vim 在有些系统同上没有创建 `.vimrc` 文件，使用 `:echo` 命令不会打印出任何东西。可以在 vim 上输入 `:version` 命令查看版本信息，里面会包含检索 `.vimrc` 文件的路径。

# 删除插件

直接在上面的配置文件中将对应的插件名删除或注释掉，重新运行 vim 后，使用命令 `:PlugClean` 将自动删除不在配置文件中的插件。
