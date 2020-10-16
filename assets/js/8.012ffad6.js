(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{385:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gaming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gaming"}},[a._v("#")]),a._v(" Gaming")]),a._v(" "),s("h2",{attrs:{id:"video-driver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-driver"}},[a._v("#")]),a._v(" Video driver")]),a._v(" "),s("p",[a._v("If you followed "),s("RouterLink",{attrs:{to:"/installation/useful-packages.html#graphics-driver"}},[a._v("Installation/Useful packages/Graphics Driver")]),a._v("\nyour graphics driver & Vulkan should be already set-up correctly")],1),a._v(" "),s("h2",{attrs:{id:"graphics-card-configuration-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphics-card-configuration-tool"}},[a._v("#")]),a._v(" Graphics card configuration tool")]),a._v(" "),s("h3",{attrs:{id:"amd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[a._v("#")]),a._v(" AMD")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S radeon-profile-git radeon-profile-daemon-git\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" --now radeon-profile-daemon\n")])])]),s("h3",{attrs:{id:"nvidia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvidia"}},[a._v("#")]),a._v(" NVIDIA")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S nvidia-settings\n")])])]),s("h2",{attrs:{id:"wine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wine"}},[a._v("#")]),a._v(" Wine")]),a._v(" "),s("h3",{attrs:{id:"libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[a._v("#")]),a._v(" Libraries")]),a._v(" "),s("p",[a._v("Recommended by "),s("a",{attrs:{href:"https://github.com/lutris/docs/blob/master/WineDependencies.md#archantergosmanjaroother-arch-derivatives",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lutris"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S --needed wine-staging giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libgcrypt libgcrypt lib32-libxinerama ncurses lib32-ncurses opencl-icd-loader lib32-opencl-icd-loader libxslt lib32-libxslt libva lib32-libva gtk3 lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs\n")])])]),s("p",[a._v("Other packages not listed by Lutris")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S vkd3d lib32-vkd3d faudio lib32-faudio\n")])])]),s("h3",{attrs:{id:"custom-wine-proton"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-wine-proton"}},[a._v("#")]),a._v(" Custom Wine/Proton")]),a._v(" "),s("p",[a._v("For custom Proton, I recommend "),s("a",{attrs:{href:"https://github.com/GloriousEggroll/proton-ge-custom/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("GloriousEgroll"),s("OutboundLink")],1),a._v("or "),s("a",{attrs:{href:"https://github.com/Frogging-Family/wine-tkg-git/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tk-Glitch"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Tk-Glitch also provides a wine version which can be installed with "),s("code",[a._v("yay -U wine-tkg*.pkg.tar.zst")])]),a._v(" "),s("h2",{attrs:{id:"programs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#programs"}},[a._v("#")]),a._v(" Programs")]),a._v(" "),s("p",[a._v("Install basic gaming tools")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S lutris steam gamemode lib32-gamemode\n")])])]),s("h2",{attrs:{id:"custom-kernel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-kernel"}},[a._v("#")]),a._v(" Custom kernel")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("If you are using NVIDIA and want to use a custom kernel you need to use "),s("code",[a._v("nvidia-dkms")]),a._v(" since "),s("code",[a._v("nvidia")]),a._v(" is just for the mainline "),s("code",[a._v("linux")]),a._v(" kernel and "),s("code",[a._v("nvidia-lts")]),a._v(" for "),s("code",[a._v("linux-lts")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -Rdd nvidia nvidia-lts\nyay -S nvidia-dkms\n")])])])]),a._v(" "),s("h3",{attrs:{id:"zen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zen"}},[a._v("#")]),a._v(" Zen")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S linux-zen linux-zen-headers\n")])])]),s("h3",{attrs:{id:"tk-glitch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tk-glitch"}},[a._v("#")]),a._v(" Tk-Glitch")]),a._v(" "),s("p",[a._v("See "),s("a",{attrs:{href:"https://github.com/Frogging-Family/linux-tkg",target:"_blank",rel:"noopener noreferrer"}},[a._v("linux-tkg"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"after-installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#after-installing"}},[a._v("#")]),a._v(" After installing")]),a._v(" "),s("p",[a._v("You need to re-generate your grub config")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grub-mkconfig")]),a._v(" -o /boot/grub/grub.cfg\n")])])]),s("h2",{attrs:{id:"tweak-esync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tweak-esync"}},[a._v("#")]),a._v(" Tweak Esync")]),a._v(" "),s("p",[a._v("If this command prints out a value which is equal or greater to "),s("code",[a._v("524288")]),a._v(" you're all set")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("ulimit")]),a._v(" -Hn\n")])])]),s("p",[a._v("However, if it doesn't or you want to further improve it:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/systemd/system.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/systemd/user.conf\n")])])]),s("p",[a._v("append this in both files")]),a._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DefaultLimitNOFILE")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("1024:1048576")]),a._v("\n")])])]),s("p",[a._v("Source: "),s("a",{attrs:{href:"https://github.com/zfigura/wine/blob/master/README.esync",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/zfigura/wine/blob/master/README.esync"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"other-tweaks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-tweaks"}},[a._v("#")]),a._v(" Other tweaks")]),a._v(" "),s("p",[a._v("The Arch wiki has a page dedicated to "),s("a",{attrs:{href:"https://wiki.archlinux.org/index.php/gaming",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gaming"),s("OutboundLink")],1),a._v(" with a few other tweaks you might want to look into.")])])}),[],!1,null,null,null);t.default=r.exports}}]);