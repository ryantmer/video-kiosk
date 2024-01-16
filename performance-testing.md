# My Pi

## With 32GB Class 10 card

### SD card slot

Raspberry Pi Diagnostics - version 0.9
Sun Jan 14 15:57:49 2024

Test : SD Card Speed Test
Run 1
Sequential write speed 2591 KB/sec (target 10000) - FAIL
Random write speed 278 IOPS (target 500) - FAIL
Random read speed 2257 IOPS (target 1500) - PASS
Run 2
Sequential write speed 3183 KB/sec (target 10000) - FAIL
Random write speed 10 IOPS (target 500) - FAIL
Random read speed 2233 IOPS (target 1500) - PASS
Run 3
Sequential write speed 2803 KB/sec (target 10000) - FAIL
Random write speed 6 IOPS (target 500) - FAIL
Random read speed 2297 IOPS (target 1500) - PASS
Test FAIL

### USB SD reader

Raspberry Pi Diagnostics - version 0.9
Mon Jan 15 13:11:52 2024

Test : SD Card Speed Test
Run 1
Sequential write speed 3251 KB/sec (target 10000) - FAIL
Random write speed 15 IOPS (target 500) - FAIL
Random read speed 1651 IOPS (target 1500) - PASS
Run 2
Sequential write speed 3084 KB/sec (target 10000) - FAIL
Random write speed 5 IOPS (target 500) - FAIL
Random read speed 1635 IOPS (target 1500) - PASS
Run 3
Sequential write speed 9014 KB/sec (target 10000) - FAIL
Random write speed 83 IOPS (target 500) - FAIL
Random read speed 1756 IOPS (target 1500) - PASS
Test FAIL

```
pi@raspberrypi:~ $ sudo hdparm -Ttv /dev/sda2

/dev/sda2:
SG_IO: bad/missing sense data, sb[]:  70 00 05 00 00 00 00 0a 00 00 00 00 24 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
 multcount     =  0 (off)
 readonly      =  0 (off)
 readahead     = 256 (on)
 geometry      = 30436/64/32, sectors = 61801472, start = 532480
 Timing cached reads:   812 MB in  2.00 seconds = 406.22 MB/sec
 Timing buffered disk reads: 124 MB in  3.00 seconds =  41.32 MB/sec
```

## With 64GB A2 card

Raspberry Pi Diagnostics - version 0.13
Mon Jan 15 15:44:41 2024

Test : SD Card Speed Test
Run 1
Sequential write speed 36247 KB/sec (target 10000) - PASS
Random write speed 1137 IOPS (target 500) - PASS
Random read speed 2683 IOPS (target 1500) - PASS
Test PASS

```
pi@raspberrypi:~ $ sudo hdparm -Ttv /dev/mmcblk0p2 

/dev/mmcblk0p2:
 readonly      =  0 (off)
 readahead     = 256 (on)
 geometry      = 1932480/4/16, sectors = 123678720, start = 1056768
 Timing cached reads:   1632 MB in  2.00 seconds = 816.94 MB/sec
 Timing buffered disk reads: 128 MB in  3.03 seconds =  42.21 MB/sec
```

# Museum Pi, 8GB Class 3 card

## SD card slot

Raspberry Pi Diagnostics - version 0.13
Mon Jan 15 10:55:12 2024

Test : SD Card Speed Test
Run 1
Sequential write speed 4757 KB/sec (target 10000) - FAIL
Random write speed 147 IOPS (target 500) - FAIL
Random read speed 1265 IOPS (target 1500) - FAIL
Run 2
Sequential write speed 4920 KB/sec (target 10000) - FAIL
Random write speed 62 IOPS (target 500) - FAIL
Random read speed 1342 IOPS (target 1500) - FAIL
Run 3
Sequential write speed 4757 KB/sec (target 10000) - FAIL
Random write speed 48 IOPS (target 500) - FAIL
Random read speed 1353 IOPS (target 1500) - FAIL
Test FAIL

## USB SD reader

Raspberry Pi Diagnostics - version 0.13
Mon Jan 15 12:49:34 2024

Test : SD Card Speed Test
Run 1
Sequential write speed 4212 KB/sec (target 10000) - FAIL
Random write speed 65 IOPS (target 500) - FAIL
Random read speed 1130 IOPS (target 1500) - FAIL
Run 2
Sequential write speed 4332 KB/sec (target 10000) - FAIL
Random write speed 63 IOPS (target 500) - FAIL
Random read speed 1119 IOPS (target 1500) - FAIL
Run 3
Sequential write speed 4921 KB/sec (target 10000) - FAIL
Random write speed 70 IOPS (target 500) - FAIL
Random read speed 1129 IOPS (target 1500) - FAIL
Test FAIL

```
pi@raspberrypi:~ $ sudo hdparm -Ttv /dev/sda2

/dev/sda2:
 multcount     =  0 (off)
 readonly      =  0 (off)
 readahead     = 256 (on)
 geometry      = 1020/239/62, sectors = 14069760, start = 1056768
 Timing cached reads:   1774 MB in  2.00 seconds = 887.70 MB/sec
 Timing buffered disk reads:  68 MB in  3.06 seconds =  22.21 MB/sec
pi@raspberrypi:~ $ sudo hdparm -Ttv /dev/sda2

/dev/sda2:
 multcount     =  0 (off)
 readonly      =  0 (off)
 readahead     = 256 (on)
 geometry      = 1020/239/62, sectors = 14069760, start = 1056768
 Timing cached reads:   2126 MB in  2.00 seconds = 1065.30 MB/sec
 Timing buffered disk reads:  68 MB in  3.06 seconds =  22.21 MB/sec
pi@raspberrypi:~ $ sudo hdparm -Ttv /dev/sda2

/dev/sda2:
 multcount     =  0 (off)
 readonly      =  0 (off)
 readahead     = 256 (on)
 geometry      = 1020/239/62, sectors = 14069760, start = 1056768
 Timing cached reads:   2038 MB in  2.00 seconds = 1021.21 MB/sec
 Timing buffered disk reads:  68 MB in  3.06 seconds =  22.23 MB/sec
pi@raspberrypi:~ $ 
```