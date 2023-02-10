class RoboService {

  _apiBase = 'http://195.93.173.91:3002';
  

  getReSource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getHistory = async (id) =>{
    /*подучить историю покупок пользователя id*/
    const res = await this.getReSource(
      `${this._apiBase}/getHistory?user_id=${id}`
    )
    return await res;}

  getPaymentBlock = async (id, user_id) =>{
    /*получить ссылку для оплаты блока id для юзера user_id */
    const res = await this.getReSource(
      `${this._apiBase}/getPaymentBlock?id=${id}&user_id=${user_id}`
    )
    return await res;
  }
  getnobuy = async (id, user_id) =>{
    /*получить все не купленные видео (для слайдера)*/
    const res = await this.getReSource(
      `${this._apiBase}/getnobuy?id=${id}&user_id=${user_id}`
    )
    console.log(res);
    return await res;
  }

  getAllBlocks = async (id) =>{
    /*Получить все блоки, которые в прицнипе существуют*/
    const res = await this.getReSource(
      `${this._apiBase}/getAllBlocks?id=${id}`
    )
    console.log(res);

    return await res;
  }


  getVideosInBlock = async (id, user_id) =>{
    /*Все купленные видео в блоке id*/
    const res = await this.getReSource(
      `${this._apiBase}/getVideosInBlock?id=${id}&user_id=${user_id}`
    )

    return await res;

  }

  getUser = async(login, pass) =>{
    /*вход пользователя*/
    const res = await this.getReSource(
      `${this._apiBase}/getuser?log=${login}&pas=${pass}`
    )
    return await res;
  }

  registerUser = async(name, email, pas) => {
    /*регистрация пользователя*/
    const res = await this.getReSource(
      `${this._apiBase}/registerUser?name=${name}&email=${email}&pas=${pas}`
    )
    return await res;

  }

  getPaymentUrlForVideo = async (user_id, video_id) => {
    const res =  this.getReSource(
      `${this._apiBase}/getPaymentUrlForVideo?user_id=${user_id}&video_id=${video_id}`)
      return await res;
  }


}

export default RoboService;