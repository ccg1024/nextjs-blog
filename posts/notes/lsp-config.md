---
title: 'Neovim LSP config'
date: '2022-07-09'
description: 'Credit to How to Configure LSP'
---

# 简述

> **2022/11/13**
> 原插件`williamboman/nvim-lsp-installer`停止更新，新项目地址[williamboman/mason.nvim
> ](https://github.com/williamboman/mason.nvim#installation)，用法同原插件类似。
> `~/.config/nvim/lua/lsp/init.lua`文件中，函数`update_capabilities`更新为`default_capabilities`

记录配置 nvim LSP 过程。nvim 版本：`v0.7.2`。所需插件：[neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)，[williamboman/nvim-lsp-installer](https://github.com/williamboman/nvim-lsp-installer)

目录结构：

![目录结构](D:/GitProject/blog/public/images/notes/lsp-config/tree.png)

与 LSP 相关的配置全部置于`~/.config/nvim/lua/lsp`文件夹中。

> 使用 lua 配置 nvim，可将配置内容依据喜好放置在不同文件，只需要在`~/.config/nvim/init.lua`中指明有哪些配置文件即可。

# 安装 LSP 插件

### packer

```lua
  use "williamboman/nvim-lsp-installer"
  use 'neovim/nvim-lspconfig'
```

> - nvim-lspconfig: 配置 LSP 服务器
> - nvim-lsp-installer: 下载对应语言所需要的 LSP 服务器

# 配置文件

在`~/.config/nvim/init.lua`中导入自定义的 lsp 模块

```lua
require("lsp")
```

> 当一个文件夹中存在`init.lua`文件时，可在`~/.config/nvim/init.lua`中直接导入该文件夹。`~/.config/nvim/lua`文件夹是属于自动检索路径。

文件：`~/.config/nvim/lua/lsp/init.lua`

```lua
require("nvim-lsp-installer").setup{}

-- Mappings.
-- See `:help vim.diagnostic.*` for documentation on any of the below functions
local opts = { noremap=true, silent=true }
vim.keymap.set('n', '<space>e', vim.diagnostic.open_float, opts)
vim.keymap.set('n', '[d', vim.diagnostic.goto_prev, opts)
vim.keymap.set('n', ']d', vim.diagnostic.goto_next, opts)
vim.keymap.set('n', '<space>q', vim.diagnostic.setloclist, opts)

local lspconfig = require("lspconfig")
local function on_attach(client, bufnr) -- set up buffer keymaps, etc.
  -- Mappings.
  -- See `:help vim.lsp.*` for documentation on any of the below functions
  local bufopts = { noremap=true, silent=true, buffer=bufnr }
  vim.keymap.set('n', 'gD', vim.lsp.buf.declaration, bufopts)
  vim.keymap.set('n', 'gd', vim.lsp.buf.definition, bufopts)
  vim.keymap.set('n', 'K', vim.lsp.buf.hover, bufopts)
  vim.keymap.set('n', '<space>D', vim.lsp.buf.type_definition, bufopts)
  vim.keymap.set('n', '<space>rn', vim.lsp.buf.rename, bufopts)
  vim.keymap.set('n', 'gr', vim.lsp.buf.references, bufopts)
end

local lsp_flags = {
  debounce_text_changes = 100,
}

-- Setup lspconfig.
local capabilities = require('cmp_nvim_lsp').default_capabilities(vim.lsp.protocol.make_client_capabilities())
```

该部分主要是设置 LSP 信息提示时间，按键映射。来自`nvim-config`插件主页中的 Suggested configuration 部分。

# 安装 LSP 服务器

输入命令`:LspInstallInfo`调出插件`nvim-lsp-installer`界面。

![lsp-installer](D:/GitProject/blog/public/images/notes/lsp-config/installer.png)

按`i`可安装当前光标下的 LSP 服务器。**服务器是以 zip 文件形式下载的，需要确保本地环境有 zip，unzip 两个命令。** 默认下载/安装路径为：`~/.local/share/nvim/lsp_servers`

# 启动 LSP 服务

在`~/.config/nvim/lua/lsp/init.lua`文件尾添加启动配置。

```lua
-- after local capabilities = ....
-- start server
lspconfig.sumneko_lua.setup {
  on_attach = on_attach,
  flags = lsp_flags,
  capabilities = capabilities,
  settings = {
    Lua = {
      runtime = {
        version = 'LuaJIT',
      },
      diagnostics = {
        globals = {"vim", "packer_bootstrap"},
      },
      workspace = {
        library = vim.api.nvim_get_runtime_file("", true),
      },
      telemetry = {
        enable = false,
      },
    },
  },
}

lspconfig.pyright.setup {
  on_attach = on_attach,
  flags = lsp_flags,
  capabilities = capabilities,
  settings = {
    python = {
      analysis = {
        autoSearchPaths = true,
        diagnosticMode = "workspace",
        useLibraryCodeForTypes = true,
        typeCheckingMode = "off",
      }
    }
  },
}
```

在[这里](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md)可以查看所有 nvim 支持的 LSP 服务器默认设置。前三个参数是启动所有 LSP 服务器都需要填写的，就是将前面配置的内容传递给 LSP 服务器。后面的 setting 部分不一定需要修改。上面的配置启动了 lua 与 python 语言的 LSP 服务器。

到这里 LSP 已经配置完成，能够显示语法检查的错误信息等。

# 修改 LSP 提示信息风格

文件： `~/.config/nvim/lua/lsp/handlers.lua`

```lua
-- Configure lsp information display style
local M = {}

M.setup = function()
  -- replace the lsp info symbol
  local signs = {
    { name = "DiagnosticSignError", text = "" },
    { name = "DiagnosticSignWarn", text = "" },
    { name = "DiagnosticSignHint", text = "" },
    { name = "DiagnosticSignInfo", text = "" },
  }

  for _, sign in ipairs(signs) do
    vim.fn.sign_define(sign.name, { texthl = sign.name, text = sign.text, numhl = "" })
  end

  -- set the style of lsp info
  local config = {
    -- disable virtual text
    -- the message show after the current line.
    virtual_text = false,
    -- show signs
    signs = {
      active = signs,
    },
    update_in_insert = true,
    underline = true,
    severity_sort = true,
    float = {
      focusable = false,
      style = "minimal",
      border = "rounded",
      source = "always",
      header = "",
      prefix = "",
    },
  }

  vim.diagnostic.config(config)

  -- set the popup window border
  vim.lsp.handlers["textDocument/hover"] = vim.lsp.with(vim.lsp.handlers.hover, {
    border = "rounded",
  })

  vim.lsp.handlers["textDocument/signatureHelp"] = vim.lsp.with(vim.lsp.handlers.signature_help, {
    border = "rounded",
  })
end

return M
```

主要是将提示标志修改成`nerd font`字体符号，修改文档信息等呼出窗口为有边框模式等。其中`virtual_text`这一设置控制是否在有语法错误的那一行末显示错误信息的精简内容。

在`~/.config/nvim/lua/lsp/init.lua`文件末导入该文件，使配置生效。

```lua
-- after start lsp server config....
-- change info style of lsp
require("lsp.handlers").setup()
```

# 效果

![效果图](D:/GitProject/blog/public/images/notes/lsp-config/result.png)

红色框中的内容便是最终 LSP 显示的信息样式。

> LSP 是不怎么提供补全内容的，在 nvim-lspconfig 插件页面有启动默认补全的设置，这里没有使用，后续通过 nvim-cmp 插件来提过更加完善的补全效果。错误信息内容需要通过前面配置快捷键`<space>+e`呼出。

# 代码补全

所需插件

![补全](D:/GitProject/blog/public/images/notes/lsp-config/cmp.png)

这里使用的是`nvim-cmp`搭配`ultisnips`进行补全与代码片段实现。所用到的插件都是[nvim-cmp](https://github.com/hrsh7th/nvim-cmp)页面中 Recommended Configuration 部分所罗列的设置。核心插件是`nvim-cmp`, `cmp-nvim-lsp`提供 LSP 的语法补全，其他插件只是完善作用。

## 配置 nvim-cmp

文件：`~/.config/nvim/lua/lsp/cmp.lua`

```lua
--   פּ ﯟ   some other good icons
local kind_icons = {
  Text = "",
  Method = "m",
  Function = "",
  Constructor = "",
  Field = "",
  Variable = "",
  Class = "",
  Interface = "",
  Module = "",
  Property = "",
  Unit = "",
  Value = "",
  Enum = "",
  Keyword = "",
  Snippet = "",
  Color = "",
  File = "",
  Reference = "",
  Folder = "",
  EnumMember = "",
  Constant = "",
  Struct = "",
  Event = "",
  Operator = "",
  TypeParameter = "",
}
-- find more here: https://www.nerdfonts.com/cheat-sheet

local t = function(str)
  return vim.api.nvim_replace_termcodes(str, true, true, true)
end
local cmp = require('cmp')

cmp.setup{
  snippet = {
    expand = function(args)
      vim.fn["UltiSnips#Anon"](args.body)
    end,
  },
  window = {
    completion = cmp.config.window.bordered(),
    documentation = cmp.config.window.bordered(),
  },
  mapping = {
    ["<Tab>"] = cmp.mapping({
      c = function()
        if cmp.visible() then
          cmp.select_next_item({ behavior = cmp.SelectBehavior.Insert })
        else
          cmp.complete()
        end
      end,
      i = function(fallback)
        if cmp.visible() then
          cmp.select_next_item({ behavior = cmp.SelectBehavior.Insert })
        else
          fallback()
        end
      end
    }),
    ["<S-Tab>"] = cmp.mapping({
      c = function()
        if cmp.visible() then
          cmp.select_prev_item({ behavior = cmp.SelectBehavior.Insert })
        else
          cmp.complete()
        end
      end,
      i = function(fallback)
        if cmp.visible() then
          cmp.select_prev_item({ behavior = cmp.SelectBehavior.Insert })
        else
          fallback()
        end
      end
    }),
    ['<Down>'] = cmp.mapping(cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Select }), {'i'}),
    ['<Up>'] = cmp.mapping(cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Select }), {'i'}),
    ['<C-n>'] = cmp.mapping({
      c = function()
        if cmp.visible() then
          cmp.select_next_item({ behavior = cmp.SelectBehavior.Select })
        else
          vim.api.nvim_feedkeys(t('<Down>'), 'n', true)
        end
      end,
      i = function(fallback)
        if cmp.visible() then
          cmp.select_next_item({ behavior = cmp.SelectBehavior.Select })
        else
          fallback()
        end
      end
    }),
    ['<C-p>'] = cmp.mapping({
      c = function()
        if cmp.visible() then
          cmp.select_prev_item({ behavior = cmp.SelectBehavior.Select })
        else
          vim.api.nvim_feedkeys(t('<Up>'), 'n', true)
        end
      end,
      i = function(fallback)
        if cmp.visible() then
          cmp.select_prev_item({ behavior = cmp.SelectBehavior.Select })
        else
          fallback()
        end
      end
    }),
    ['<C-b>'] = cmp.mapping(cmp.mapping.scroll_docs(-4), {'i', 'c'}),
    ['<C-f>'] = cmp.mapping(cmp.mapping.scroll_docs(4), {'i', 'c'}),
    --['<C-e>'] = cmp.mapping(cmp.mapping.complete(), {'i', 'c'}),
    --['<C-e>'] = cmp.mapping({ i = cmp.mapping.close(), c = cmp.mapping.close() }),
    ['<CR>'] = cmp.mapping({
      i = cmp.mapping.confirm({ behavior = cmp.ConfirmBehavior.Replace, select = true }),
      c = function(fallback)
        if cmp.visible() then
          cmp.confirm({ behavior = cmp.ConfirmBehavior.Replace, select = true})
        else
          fallback()
        end
      end
    }),
  },

  formatting = {
    fields = { "kind", "abbr", "menu" },
    format = function(entry, vim_item)
      -- Kind icons
      vim_item.kind = string.format("%s", kind_icons[vim_item.kind])
      vim_item.menu = ({
        nvim_lsp = "[LSP]",
        ultisnips = "[Snippet]",
        buffer = "[Buffer]",
        path = "[Path]",
      })[entry.source.name]
      return vim_item
    end,
  },

  sources = cmp.config.sources({
    { name = 'nvim_lsp' },
    { name = 'ultisnips' },
  }, {
    { name = 'buffer' },
    { name = 'path' },
  })
}

-- Set configuration for specific filetype.
cmp.setup.filetype('gitcommit', {
  sources = cmp.config.sources({
    { name = 'cmp_git' }, -- You can specify the `cmp_git` source if you were installed it.
  }, {
    { name = 'buffer' },
  })
})

-- Use buffer source foj `/` (if you enabled `native_menu`, this won't work anymore).
cmp.setup.cmdline('/', {
  completion = { autocomplete = false },
  sources = {
    { name = 'buffer' }
  }
})

-- Use cmdline & path source for ':' (if you enabled `native_menu`, this won't work anymore).
cmp.setup.cmdline(':', {
  completion = { autocomplete = false },
  sources = cmp.config.sources({
    { name = 'path' }
  }, {
    { name = 'cmdline' }
  })
})
```

配置内容主要来自插件 nvim-cmp 主页 Recommended Configuration 部分。只是添加了一些`nerd font`图标，并根据[Wiki](https://github.com/hrsh7th/nvim-cmp/wiki/Example-mappings#ultisnips--cmp-cmdline)部分做了部分修改。

> 主页中使用的代码片段插件不是 ultisnips。上面提供了多种选择。

## 启动补全

在文件`~/.config/nvim/lua/lsp/init.lua`文件末添加如下内容。

```lua
-- after require("lsp.handlers").setup()...
-- start cmp
require("lsp.cmp")
```

# 最终效果

![cmp](D:/GitProject/blog/public/images/notes/lsp-config/show.png)
