#!/usr/bin/python3

import os
import sys

f = sys.argv[1]

content = ""
with open(f) as fp:
    content = fp.read()

replace_content = content.replace("$HOME", os.getenv("HOME"))

print(replace_content)

