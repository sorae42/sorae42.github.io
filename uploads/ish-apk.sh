#!/bin/bash
# Please give this script executable permission by entering the following command:
# chmod +x ish-apk.sh
echo On the Subject of Downloading.
wget http://dl-cdn.alpinelinux.org/alpine/v3.12/main/x86/apk-tools-static-2.10.5-r1.apk
echo On the Subject of Extracting.
tar xf apk-tools-static-2.10.5-r1.apk sbin/apk.static
echo On the Subject of Installing.
./sbin/apk.static add apk-tools
echo Successfully Installed APK.

