# ROOM 404 Photo Asset Import Contract

The game code already references these files. Import images here when the final art is ready.

Supported extensions are tried in this order:

```text
.jpg
.png
.webp
.jpeg
```

Expected stems:

```text
linxia-photo-02
linxia-photo-05
linxia-photo-08
linxia-photo-11
linxia-photo-13
photo17-web-v0
photo17-web-v1
photo17-web-v2
photo17-original
photo17-club-copy
photo17-backup-20070823
photo17-restore-2015
photo17-recon-2016
photo17-recon-2022
photo17-session
```

For example:

```text
public/assets/photos/photo17-web-v0.jpg
public/assets/photos/photo17-web-v1.jpg
public/assets/photos/photo17-web-v2.jpg
```

If a file is missing, the UI renders a stable placeholder and the story flow still works.
