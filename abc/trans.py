# watch multi exec unwatch discard
import threading
import time
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

def notrans():
    print(r.incr('notrans:'))
    time.sleep(0.1)
    r.incr('notrans:',-1)

if 1:
    for i in range(3):
        threading.Thread(target=notrans).start()
    time.sleep(0.5)

#transaction
print('---trans---')
def trans():
    pipeline = r.pipeline()
    pipeline.incr('trans:')
    time.sleep(0.1)
    pipeline.incr('trans:',-1)
    print(pipeline.execute()[0])

if 1:
    for i in range(3):
        threading.Thread(target=trans).start()
    time.sleep(0.5)

