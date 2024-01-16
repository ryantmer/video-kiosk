# video-kiosk

A simple video kiosk, purpose-built for a particular application so not really of any interest to anybody.

> This is not the code you're looking for. Move along.

## Notes about functionality

Nothing special: pi/raspberry. Very secure. Don't ever connect this thing to a network, ha.

Server log messages can be seen with `journalctl -fu coshof-server.service`.

## Setup and Installation Notes

### Server setup

1. Install LTS version of NodeJS (20 was last used, but newer ones are probably fine)

1. Copy `server` and `webpage` to `/home/pi/Desktop`

1. `cd /home/pi/Desktop/server && npm i`

1. `sudo nano /etc/systemd/system/coshof-server.service` and add:
```
[Unit]
Description=COSHOF Server
After=multi-user.target

[Service]
ExecStart=npm run start
WorkingDirectory=/home/pi/Desktop/server
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

This can then be be tested:
- `sudo systemctl start coshof-server.service`
- `systemctl status coshof-server.service`
- `sudo systemctl stop coshof-server.service`

And set to auto-run on boot with `sudo systemctl enable coshof-server.service`
- Can then test by rebooting, and checking the result of `systemctl status coshof-server.service`

### Webpage setup

Open `sudo nano /home/pi/.config/autostart/coshof-webpage.desktop` and add:
```
[Desktop Entry]
Type=Application
Name=COSHOF Webpage
Exec=chromium-browser --start-fullscreen /home/pi/Desktop/webpage/index.html
```

Reboot the Raspberry Pi to ensure this also auto-runs after login.

Now, create a `Videos` folder on the desktop, and copy all the video files into it (name format is `YYYY - Title Goes Here.mp4`). Also copy the `Video_Index.csv` from this repo, and ensure that it opens in a text editor by default. While here, ensure that the `Video_Index.csv` file matches the available videos.

Finally, add a desktop shortcut entitled "COSHOF Home" that is the same command as the `Exec` above.