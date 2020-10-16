(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{397:function(a,t,s){"use strict";s.r(t);var e=s(25),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"post-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-installation"}},[a._v("#")]),a._v(" Post-Installation")]),a._v(" "),s("h2",{attrs:{id:"set-x11-keymap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-x11-keymap"}},[a._v("#")]),a._v(" Set X11 Keymap")]),a._v(" "),s("p",[a._v("⌨️ It's recommended to set this to your keymap. Some Display Manager and Desktop Environments use this (replace "),s("code",[a._v("yourkeymap")]),a._v(" with your keymap e.g. "),s("code",[a._v("de")]),a._v(")")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("localectl set-x11-keymap yourkeymap\n")])])]),s("h2",{attrs:{id:"wifi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wifi"}},[a._v("#")]),a._v(" WiFi")]),a._v(" "),s("p",[a._v("📶 You can use "),s("code",[a._v("nmtui")]),a._v(" or "),s("code",[a._v("wifi-menu")]),a._v(" to configure your network profile")]),a._v(" "),s("h2",{attrs:{id:"oh-my-zsh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[a._v("#")]),a._v(" Oh My Zsh")]),a._v(" "),s("p",[a._v("🤖 A delightful & open source framework for Zsh")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),s("h2",{attrs:{id:"oh-my-fish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-fish"}},[a._v("#")]),a._v(" Oh my Fish")]),a._v(" "),s("p",[a._v("🤖 The Fishshell Framework")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L https://get.oh-my.fish "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fish\n")])])]),s("h2",{attrs:{id:"aur-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aur-setup"}},[a._v("#")]),a._v(" AUR Setup")]),a._v(" "),s("p",[a._v("The Arch User Repository is a community-driven repository for Arch users. "),s("code",[a._v("yay")]),a._v(" is a pacman wrapper that allows installing AUR packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/yay.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" yay\nmakepkg -rsi\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf yay\n")])])]),s("h2",{attrs:{id:"yay-cheat-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yay-cheat-sheet"}},[a._v("#")]),a._v(" Yay Cheat sheet")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("yay")]),a._v(" Update system")]),a._v(" "),s("li",[s("code",[a._v("yay xyz")]),a._v(" Install xyz")]),a._v(" "),s("li",[s("code",[a._v("yay -Rns xyz")]),a._v(" Uninstall xyz")]),a._v(" "),s("li",[s("code",[a._v("yay -Rdd xyz")]),a._v(" Force remove xyz (should not be used)")]),a._v(" "),s("li",[s("code",[a._v("yay -Yc")]),a._v(" Uninstall not explicitly installed optional dependencies")]),a._v(" "),s("li",[s("code",[a._v("yay -Si xyz")]),a._v(" Show remote package")]),a._v(" "),s("li",[s("code",[a._v("yay -Qi xyz")]),a._v(" Show local package")]),a._v(" "),s("li",[s("code",[a._v("yay -Qq")]),a._v(" List installed packages")]),a._v(" "),s("li",[s("code",[a._v("yay -Qqe")]),a._v(" List explicitly installed packages")])]),a._v(" "),s("h2",{attrs:{id:"if-you-want-a-graphical-package-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-a-graphical-package-manager"}},[a._v("#")]),a._v(" If you want a graphical package manager")]),a._v(" "),s("p",[a._v("📦 I recommend only to use "),s("code",[a._v("yay")]),a._v(" to update and install packages but (especially if you are a beginner) you may want a graphical package manager")]),a._v(" "),s("ul",[s("li",[a._v("Simple GTK: "),s("code",[a._v("yay -S gnome-packagekit")])]),a._v(" "),s("li",[a._v("Simple Qt: "),s("code",[a._v("yay -S apper")])]),a._v(" "),s("li",[a._v("Complex GTK: "),s("code",[a._v("yay -S pamac-aur")]),a._v(" (Most beginner friendly)")]),a._v(" "),s("li",[a._v("Complex Qt: "),s("code",[a._v("yay -S octopi")])])]),a._v(" "),s("h2",{attrs:{id:"qt-theme-on-gtk-desktop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-theme-on-gtk-desktop"}},[a._v("#")]),a._v(" Qt theme on GTK Desktop")]),a._v(" "),s("p",[a._v("If you use a GTK desktop and want Qt apps to use your GTK Theme you have 2 choices")]),a._v(" "),s("p",[a._v("You need to install the Qt5 Style plugins for both")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S qt5-styleplugins\n")])])]),s("h3",{attrs:{id:"convert-gtk2-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert-gtk2-theme"}},[a._v("#")]),a._v(" Convert GTK2 theme")]),a._v(" "),s("p",[a._v("🧮 This may not look good with every GTK Theme")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"export QT_QPA_PLATFORMTHEME=gtk2"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])]),s("h3",{attrs:{id:"qt5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt5"}},[a._v("#")]),a._v(" Qt5")]),a._v(" "),s("p",[a._v("You can use Qt5Ct instead")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S qt5ct\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"export QT_QPA_PLATFORMTHEME=qt5ct"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])]),s("h2",{attrs:{id:"if-you-want-to-read-apfs-partitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-to-read-apfs-partitions"}},[a._v("#")]),a._v(" If you want to read APFS Partitions")]),a._v(" "),s("p",[a._v("💽 If you have a Hackintosh installation you can use this to access your files from it")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S linux-apfs-dkms-git\n")])])]),s("h2",{attrs:{id:"fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fonts"}},[a._v("#")]),a._v(" Fonts")]),a._v(" "),s("h3",{attrs:{id:"general-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-fonts"}},[a._v("#")]),a._v(" General Fonts")]),a._v(" "),s("p",[a._v("🗛 Those are some essential font packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S adobe-source-sans-pro-fonts ttf-dejavu ttf-opensans noto-fonts freetype2 terminus-font ttf-bitstream-vera ttf-dejavu ttf-droid ttf-fira-mono ttf-fira-sans ttf-freefont ttf-inconsolata ttf-liberation ttf-linux-libertine\n")])])]),s("h3",{attrs:{id:"windows-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-fonts"}},[a._v("#")]),a._v(" Windows Fonts")]),a._v(" "),s("p",[a._v("🗛 If you want the Windows/Microsoft fonts (f.e. for Office Suites and required by certain games under Wine)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/ttf-ms-win10.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ttf-ms-win10\n")])])]),s("p",[a._v("Read "),s("code",[a._v("PKGBUILD")]),a._v(" and copy all windows files into the directory and then run "),s("code",[a._v("makepkg -rsi --skipchecksums")])]),a._v(" "),s("h3",{attrs:{id:"macos-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-fonts"}},[a._v("#")]),a._v(" macOS Fonts")]),a._v(" "),s("p",[a._v("🗚 If you want the San Francisco Font by Apple")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S otf-san-francisco-pro otf-san-francisco-mono\n")])])]),s("h2",{attrs:{id:"nano-syntax-highlighting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nano-syntax-highlighting"}},[a._v("#")]),a._v(" Nano syntax highlighting")]),a._v(" "),s("p",[a._v("📃 This package provides syntax highlighting enhancements to the nano text editor")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S nano-syntax-highlighting\n")])])]),s("h2",{attrs:{id:"auto-clean-package-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-clean-package-cache"}},[a._v("#")]),a._v(" Auto clean package cache")]),a._v(" "),s("p",[a._v("🗑️ This will clear the package cache to only keep 1 version after every action")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S pacman-contrib\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /etc/pacman.d/hooks\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/pacman.d/hooks/clean_package_cache.hook\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[a._v("Click me to view the code")]),a._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("[Trigger]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Operation")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" Upgrade")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Operation")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" Install")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Operation")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" Remove")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" Package")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Target")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" *")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("[Action]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Description")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" Cleaning pacman cache...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("When")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" PostTransaction")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" /usr/bin/paccache -rk 2")]),a._v("\n")])])])]),a._v(" "),s("h2",{attrs:{id:"theming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theming"}},[a._v("#")]),a._v(" Theming")]),a._v(" "),s("p",[a._v("If you are using KDE Plasma, I do not recommend using the built-in installation methods, as in my experience they're very buggy.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("These are the themes that I'm using on my KDE Plasma setup")])]),a._v(" "),s("h3",{attrs:{id:"general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[a._v("#")]),a._v(" General")]),a._v(" "),s("p",[a._v("Icon Theme")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S la-capitaine-icon-theme korla-icon-theme\n")])])]),s("p",[a._v("Cursor Theme")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S capitaine-cursors whitesur-cursor-theme-git\n")])])]),s("h3",{attrs:{id:"plasma-qt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plasma-qt"}},[a._v("#")]),a._v(" Plasma & Qt")]),a._v(" "),s("p",[a._v("Plasma, Kvantum, SDDM Style")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S kvantum-qt5 whitesur-kde-theme-git\n")])])]),s("p",[a._v("Color")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S materia-kde\n")])])]),s("p",[a._v("Window Decoration")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S hello-kde-git\n")])])]),s("p",[a._v("Effects")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S kwin-effects-appear1 kwin-effects-disappear1 kwin-effects-yet-another-magic-lamp kwin-scripts-forceblur\n")])])]),s("p",[a._v("Latte Dock")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S latte-dock kwin-scripts-window-colors\n")])])]),s("h3",{attrs:{id:"gtk-gnome"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gtk-gnome"}},[a._v("#")]),a._v(" GTK & GNOME")]),a._v(" "),s("p",[a._v("GTK Theme")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S whitesur-gtk-theme-git\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);