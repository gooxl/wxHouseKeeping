// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db=cloud.database();
// 云函数入口函数

exports.main=async(event,context)=>{
  try{
    return await db.collection("yuesao")
      .doc(event.id)
      .update({
        data: {
          edu:event.edu,
          served: event.served,
          state: event.state,
          position: event.position,
          eva: event.eva,
          price: event.price,
          nation: event.nation,
          title: event.title,
          zodiac: event.zodiac,
          marry: event.marry,
          ability: event.ability,
          introduce: event.introduce
        }
      }).then(res => {console.log(res)})
  }catch(e){ console.log(e) }
}