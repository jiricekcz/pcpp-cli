from ctypes import *
lib = CDLL("./lib.dll")

lib.test.restype = c_char_p
def test():
    return str(lib.test()).lstrip("b'").rstrip("'")