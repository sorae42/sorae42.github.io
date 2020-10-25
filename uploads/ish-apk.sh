#!/bin/bash
# Please give this script executable permission by entering the following command:
# chmod +x ish-apk.sh
if ! uname -v | grep -q "iSH" ; then
      echo Not iSH, aborting...
      exit 1
fi
echo Install APK for iSH App Store Release.
echo Based on https://github.com/ish-app/ish/wiki/Installing-apk-on-the-App-Store-Version
if [ "$1" == "--keep" ] ; then
      echo This script will be deleted afterward, pass "--keep" to keep downloaded files.
fi
echo I will start downloading and installing APK in 5 seconds... (^C to cancel)
sleep 5
echo Please do not ^C but wait until it's finished.
mkdir .temp_iSH-APK
cd .temp_iSH-APK
echo On the Subject of Downloading.
wget http://dl-cdn.alpinelinux.org/alpine/v3.12/main/x86/apk-tools-static-2.10.5-r1.apk
echo On the Subject of Extracting.
tar xf apk-tools-static-2.10.5-r1.apk sbin/apk.static
echo On the Subject of Installing.
./sbin/apk.static add apk-tools
echo Successfully Installed APK.
if [ "$1" != "--keep" ] ; then 
      rm -rf $0
      rm -rf .temp_iSH-APK
else
      mv .temp_iSH-APK apk_tools
      echo I kept downloaded files because you passed "--keep" into the arguments.
fi
