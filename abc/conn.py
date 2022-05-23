
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)
#string
print('---string---')
r.set('ikey',0)

r.get('ikey')
r.incr('ikey')

r.incr('ikey', 15)

r.decr('ikey',5)

r.set('ikey','13')

r.incr('ikey')

print(r.get('ikey'))

#list
print('---list---')
r.ltrim('ilist',1, 0)

r.rpush('ilist','last')
r.lpush('ilist','first')
r.rpush('ilist','new last')
print(r.lrange('ilist',0, -1))

r.lpop('ilist')
print(r.lrange('ilist',0, -1))

r.ltrim('blist',1, 0)
r.ltrim('clist',1, 0)

r.rpush('blist','first')
r.rpush('blist','second')
r.rpush('clist','three')

r.brpoplpush('clist','blist', 1)
print(r.lrange('blist',0, -1))

r.brpoplpush('blist','clist',1)
print(r.lrange('clist',0, -1))
print(r.lrange('blist',0, -1))

r.blpop(['blist','clist'], 1)

print(r.lrange('blist',0, -1))
print(r.lrange('clist',0, -1))

#set
print('---set---')
r.sadd('iset', 'a','b','c')
print(r.smembers('iset'))
r.srem('iset','c','d')
print(r.smembers('iset'))
print(r.scard('iset'))

r.smove('iset','iset2','a')
print(r.smembers('iset2'))

r.sadd('iset3','a','b','c','d')
r.sadd('iset4','c','d','e','f')

idiff = r.sdiff('iset3','iset4')
idiff2 = r.sdiff('iset4','iset3')
print(idiff)
print(idiff2)

iinter = r.sinter('iset3','iset4')
print(iinter)
iunion = r.sunion('iset3','iset4')
print(iunion)

#hash
print('---hash---')
r.hset('ihash2','k1','v1')
r.hset('ihash2','k2','v2')
print(r.hlen('ihash2'))
print(r.hget('ihash','k3'))
print(r.hkeys('ihash'))
print(r.hvals('ihash'))
print(r.hexists('ihash','k3'))
print(r.hgetall('ihash'))

#zset
print('---zset---')
r.zadd('izset',{'a':3,'b':2,'c':1})
print(r.zcard('izset'))
print(r.zscore('izset','b'))
print(r.zrank('izset','b'))
print(r.zcount('izset',0,3))
print(r.zrem('izset','b'))
print(r.zrange('izset',0,-1,withscores=True))
#zset rev reverse
print(r.zrevrank('izset','a'))

r.zadd('i2zset',{'a':1,'b':2,'c':3})
r.zadd('i3zset',{'b':4,'c':1,'d':0})

print(r.zinterstore('i4zset',['i2zset','i3zset']))
print(r.zrange('i4zset',0,-1,withscores=True))

print(r.zunionstore('i5zset',['i2zset','i3zset'],aggregate='min'))
print(r.zrange('i5zset',0,-1,withscores=True))

r.sadd('i2set','a','b')
print(r.zunionstore('i5zset',['i2zset','i3zset','i2set'],aggregate='min'))
print(r.zrange('i5zset',0,-1,withscores=True))


#sort
print('---sort---')
r.ltrim('sortlist',1, 0)

r.rpush('sortlist',23,89,17,110)
print(r.sort('sortlist'))
print(r.sort('sortlist', alpha=True))

r.hset('sorthash','field',5)
r.hset('sorthash2','field',1)
r.hset('sorthash3','field',9)
r.hset('sorthash4','field',3)

print(r.sort('sortlist',by='sorthash*->field'))
print(r.sort('sortlist',by='sorthash*->field',get='sorthash*->field'))
