import { isEmpty, get } from 'lodash'
export function getDate(params = {}, pageNo = 1, pageSize = 10){
  let filteredData = []
  let dateValue = params.dateValue? params.dateValue: []
  if(isEmpty(params)){
    filteredData = data
  } else {
    filteredData = data.filter(item => {
      const {startDate, industry, productLine, region, name} = item
      // 判断创建时间是否在范围内
      const dateValueRange = dateValue.length? new Date(startDate) >= dateValue[0] && new Date(startDate) <= dateValue[1] : true;
      // 判断产品线是否在范围内
      const industryRange = params.industry? industry === params.industry: true;
      // 判断行业是否在范围内
      const productLineRange = params.productLine? productLine.includes(params.productLine): true;
      // 判断活动区域是否在范围内
      const regionRange = params.region? region === params.region: true;
      // 判断用户名是否在范围内
      const nameRange = params.name? name.includes(params.name): true;
      // 如果条件都符合条件，则返回 true，表示该条数据符合条件
      return dateValueRange && industryRange && productLineRange && regionRange && nameRange
    });
  }
  return {data: filteredData.slice((pageNo - 1) * pageSize, pageNo * pageSize), total: filteredData.length}
}

export function getDetail(params = {}){
  if(!params.next){
    return userInfos[params.id]
  } else {
    if(params.id == 8){
      return userInfos[0]
    } else {
      return userInfos[Number(params.id) + 1]
    }
  } 
  // else {
  //   return userInfos[Math.ceil(Math.random()*9)-1]
  // }
}

const userInfos = [{
  userInfo: {
    id: 0,
    username: 'kooriookami',
    userId: '18100000000',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: 'IT',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 1,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 2,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 3,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 4,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 5,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 6,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 7,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },
  {
    id: 8,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 1,
    username: 'sfgr',
    userId: '18100000001',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: 'IT',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 1,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 2,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 3,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 4,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 5,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 2,
    username: 'etgge',
    userId: '18100000002',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: 'IT',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 11,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 12,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 13,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 3,
    username: 'ghjgd',
    userId: '18100000003',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: 'IT',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 21,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 22,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 23,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 24,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 25,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 26,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 4,
    username: 'asdfeewe',
    userId: '18100000004',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: '制造业',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 31,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 32,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 33,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 34,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 35,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 36,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 37,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },
  {
    id: 38,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 5,
    username: 'hytj',
    userId: '18100000005',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: 'IT',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 41,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 42,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 6,
    username: '看见',
    userId: '18100000006',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: 'IT',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 51,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 52,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 53,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 54,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 7,
    username: 'i微风',
    userId: '18100000007',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: '制造业',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 61,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
},
{
  userInfo: {
    id: 8,
    username: 'hfhqq',
    userId: '18100000008',
    webAddress: "https://element.eleme.cn/#/zh-CN/component/empty",
    qualifications: '大陆企业单位',
    industry: '制造业',
    subIndustry: 'JAVA',
    userType: '普通',
    annotations: '批注XXXXXXXxxxx'
  },
  tableData: [{
    id: 71,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 72,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 73,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 74,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 75,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  },{
    id: 76,
    title: '普通鲜花速递-花礼网送花上门-同城鲜花店',
    desc: '普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门-同城鲜花店普通鲜花速递-花礼网送花上门',
    imgs: [
      require('../assets/logo.png'),
      require('../assets/logo.png')
    ]
  }]
}]

const data = [
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "IT",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "IT",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "IT",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "IT",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "IT",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  },
  {
    "name": "kooriookami",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "0"
  },
  {
    "name": "sfgr",
    "industry": "制造业",
    "productLine": "JAVA生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "1"
  },
  {
    "name": "etgge",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-05-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "2"
  },
  {
    "name": "ghjgd",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "3"
  },
  {
    "name": "asdfeewe",
    "industry": "IT",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "4"
  },
  {
    "name": "hytj",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域一",
    "userId": "5"
  },
  {
    "name": "看见",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "6"
  },
  {
    "name": "i微风",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "7"
  },
  {
    "name": "hfhqq",
    "industry": "制造业",
    "productLine": "PHP生产线",
    "startDate": "2023-04-02",
    "endDate": "2023-05-05",
    "region": "区域二",
    "userId": "8"
  }
  
]
