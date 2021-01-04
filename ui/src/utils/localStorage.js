//封装localstorage 本地存储方法

const storage={
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));//需要序列化
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));//需要反序列化

  },
  remove(key){
    localStorage.removeItem(key);

  },
  clear(){
    localStorage.clear();
  }

};

export default storage;





