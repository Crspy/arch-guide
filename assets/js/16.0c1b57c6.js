(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{393:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"partitioning-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partitioning-formatting"}},[t._v("#")]),t._v(" Partitioning & Formatting")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v('In the following X and Y are placeholders. Replace them with your corresponding device and partition number. "sd" could also be different if you don\'t connect your hard drive via SCSI/SATA')])]),t._v(" "),s("h2",{attrs:{id:"partitioning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partitioning"}},[t._v("#")]),t._v(" Partitioning")]),t._v(" "),s("h3",{attrs:{id:"list-partition-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-partition-table"}},[t._v("#")]),t._v(" List partition table")]),t._v(" "),s("p",[t._v("To get an overview you can list your partition table to find out the device you want to use")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" -l\n")])])]),s("h3",{attrs:{id:"start-partitioning-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-partitioning-tool"}},[t._v("#")]),t._v(" Start partitioning tool")]),t._v(" "),s("p",[t._v("▶️ Text-based")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" /dev/sdX\n")])])]),s("p",[t._v("▶️ UEFI only text-based")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("gdisk /dev/sdX\n")])])]),s("p",[t._v("▶️ Graphical (Recommended for beginners)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cfdisk")]),t._v(" /dev/sdX\n")])])]),s("p",[t._v("▶️ UEFI only Graphical (Recommended for beginners)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cgdisk /dev/sdX\n")])])]),s("h3",{attrs:{id:"create-partitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-partitions"}},[t._v("#")]),t._v(" Create partitions")]),t._v(" "),s("h4",{attrs:{id:"decide-partition-table-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decide-partition-table-type"}},[t._v("#")]),t._v(" Decide partition table type")]),t._v(" "),s("ul",[s("li",[t._v("BIOS: You can use both but this guide uses DOS")]),t._v(" "),s("li",[t._v("UEFI: You need to use GPT")])]),t._v(" "),s("h4",{attrs:{id:"gpt-uefi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpt-uefi"}},[t._v("#")]),t._v(" GPT (UEFI)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Needed")]),t._v(" "),s("th",[t._v("Partition")]),t._v(" "),s("th",[t._v("Partition type")]),t._v(" "),s("th",[t._v("Mount point")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("/dev/sdXY")]),t._v(" "),s("td",[t._v("EFI system partition")]),t._v(" "),s("td",[t._v("/mnt/boot/efi")])]),t._v(" "),s("tr",[s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("/dev/sdXY")]),t._v(" "),s("td",[t._v("Linux swap")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("/dev/sdXY")]),t._v(" "),s("td",[t._v("Linux")]),t._v(" "),s("td",[t._v("/mnt")])]),t._v(" "),s("tr",[s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("/dev/sdXY")]),t._v(" "),s("td",[t._v("Linux")]),t._v(" "),s("td",[t._v("/mnt/home")])])])]),t._v(" "),s("h4",{attrs:{id:"dos-bios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dos-bios"}},[t._v("#")]),t._v(" DOS (BIOS)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Needed")]),t._v(" "),s("th",[t._v("Partition")]),t._v(" "),s("th",[t._v("Partition type")]),t._v(" "),s("th",[t._v("Mount point")]),t._v(" "),s("th",[t._v("Flags")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("/dev/sdXY")]),t._v(" "),s("td",[t._v("Linux swap")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("✔️")]),t._v(" "),s("td",[t._v("/dev/sdXY")]),t._v(" "),s("td",[t._v("Linux")]),t._v(" "),s("td",[t._v("/mnt")]),t._v(" "),s("td",[t._v("Bootable")])]),t._v(" "),s("tr",[s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("/dev/sdXY")]),t._v(" "),s("td",[t._v("Linux")]),t._v(" "),s("td",[t._v("/mnt/home")]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("h4",{attrs:{id:"gpt-bios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpt-bios"}},[t._v("#")]),t._v(" GPT (BIOS)")]),t._v(" "),s("h3",{attrs:{id:"size-recommendations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-recommendations"}},[t._v("#")]),t._v(" Size recommendations")]),t._v(" "),s("h4",{attrs:{id:"efi-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#efi-system"}},[t._v("#")]),t._v(" EFI system")]),t._v(" "),s("ul",[s("li",[t._v("At least: 150MB")]),t._v(" "),s("li",[t._v("Recommended: 300MB")])]),t._v(" "),s("h4",{attrs:{id:"swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swap"}},[t._v("#")]),t._v(" Swap")]),t._v(" "),s("p",[t._v("Taken from "),s("a",{attrs:{href:"https://docs.voidlinux.org/installation/live-images/partitions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.voidlinux.org/installation/live-images/partitions.html"),s("OutboundLink")],1)]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("System RAM")]),t._v(" "),s("th",[t._v("Recommended swap space")]),t._v(" "),s("th",[t._v("Swap space if using hibernation")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("< 2GB")]),t._v(" "),s("td",[t._v("2x the amount of RAM")]),t._v(" "),s("td",[t._v("3x the amount of RAM")])]),t._v(" "),s("tr",[s("td",[t._v("2-8GB")]),t._v(" "),s("td",[t._v("Equal to amount of RAM")]),t._v(" "),s("td",[t._v("2x the amount of RAM")])]),t._v(" "),s("tr",[s("td",[t._v("8-64GB")]),t._v(" "),s("td",[t._v("At least 4GB")]),t._v(" "),s("td",[t._v("1.5x the amount of RAM")])]),t._v(" "),s("tr",[s("td",[t._v("64GB")]),t._v(" "),s("td",[t._v("At least 4GB")]),t._v(" "),s("td",[t._v("Hibernation not recommended")])])])]),t._v(" "),s("h2",{attrs:{id:"format-partitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-partitions"}},[t._v("#")]),t._v(" Format partitions")]),t._v(" "),s("h3",{attrs:{id:"efi-system-partition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#efi-system-partition"}},[t._v("#")]),t._v(" EFI system partition")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mkfs.fat -F32 -n EFI /dev/sdXY\n")])])]),s("h3",{attrs:{id:"create-root-filesystem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-root-filesystem"}},[t._v("#")]),t._v(" Create root filesystem")]),t._v(" "),s("p",[t._v("💽 This will create the filesystem where the system will be installed on")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mkfs.ext4 -L ROOT /dev/sdXY\n")])])]),s("h3",{attrs:{id:"create-home-partition-filesystem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-home-partition-filesystem"}},[t._v("#")]),t._v(" Create home partition filesystem")]),t._v(" "),s("p",[t._v("🏠 If you created a separate home partition")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mkfs.ext4 -L "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v(" /dev/sdXY\n")])])]),s("h3",{attrs:{id:"create-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-swap"}},[t._v("#")]),t._v(" Create Swap")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkswap")]),t._v(" -L SWAP /dev/sdXY\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapon")]),t._v(" /dev/sdXY\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);