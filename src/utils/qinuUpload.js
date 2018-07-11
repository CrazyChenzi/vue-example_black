const qiniu = require('qiniu')

const mac = new qiniu.auth.digest.Mac('xzY3mLAFma3RoZbPKudbzsoH1m_E4iS8CxKV-CzP', 'qiXyRvv4fL9goq8AJerBb3490zXEcb-9O3NOwjHl')
const options = {
  scope: 'blackdemo',
  deleteAfterDays: 1,
  returnBody:
    '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const token = putPolicy.uploadToken(mac);

module.exports = {
  uptoken: token,
  domain: 'owiq5ccyd.bkt.clouddn.com'
}