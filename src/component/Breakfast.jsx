import React from 'react'

export const breakfast = () => {
  return (
<div class="w-[1440px] h-[2659px] relative bg-white">
  <div className=' mx-auto grid justify-between py-[120px]  w-11/12'>
      <div class="text-center text-black  md:text-[50px] sm:text-[40px] lg:text-[45px] xl:text-[45px] font-normal font-['Pacifico'] tracking-[4px]">Categories by type/ Breakfast</div>
  </div>
    {/* <div class="border-b-2 top-0 md:w-[1290px] sm:w-[349px] border-gray-300"></div> */}

  <div className=" w-[1300px] mx-auto grid md:grid-cols-4 xl:grid-cols-4 ">
    <img src={require('../images/salad.jpg')}  className="md:w-[210px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded-[200px] " alt=""/>
    <img src={require('../images/pancake.jpg')}  className="md:w-[210px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded-[200px] " alt=""/>
    <img src={require('../images/Sandwitch.jpg')}  className="md:w-[210px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded-[200px] " alt=""/>
    <img src={require('../images/egg.jpg')}  className="md:w-[210px] md:h-[210px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded-[200px] " alt=""/>
  </div>
  <div className=" w-[1300px] mx-[150px] py-4 text-[20px] font-poppins text-gray-700 font-medium grid md:grid-cols-4 xl:grid-cols-4 ">
    <p>Salad</p>
    <p>Pancake</p>
    <p>Sandwitch</p>
    <p>Egg</p>
  </div>

  <div className=" w-[1300px] py-7 mx-auto grid md:grid-cols-4 xl:grid-cols-4 gap-6">
    <img src={require('../images/vegiomlet.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/fruitcocktail.jpg')}  className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/Crossaint.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/bakon.jpg')}  className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
  </div>
  <div className=" w-[1300px] mx-[130px] py-4 text-[20px] font-poppins text-gray-700 font-medium grid md:grid-cols-4 xl:grid-cols-4 ">
    <p>Vegi Omlet</p>
    <p>Fruit Cocktail</p>
    <p>Crossoint</p>
    <p>Bakon Sandwitch</p>
  </div>
  <div className=" w-[1300px] py-7 mx-auto grid md:grid-cols-4 xl:grid-cols-4 gap-6">
    <img src={require('../images/a.jpg')}className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/b.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/c.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/d.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
  </div>
  <div className=" w-[1300px] mx-[150px] py-4 text-[20px] font-poppins text-gray-700 font-medium grid md:grid-cols-4 xl:grid-cols-4 ">
    <p>Salad</p>
    <p>Pancake</p>
    <p>Sandwitch</p>
    <p>Egg</p>
  </div>
  <div className=" w-[1300px] py-7 mx-auto grid md:grid-cols-4 xl:grid-cols-4 gap-6">
    <img src={require('../images/e.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/f.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/g.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/h.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
  </div>
  <div className=" w-[1300px] mx-[150px] py-4 text-[20px] font-poppins text-gray-700 font-medium grid md:grid-cols-4 xl:grid-cols-4 ">
    <p>Salad</p>
    <p>Pancake</p>
    <p>Sandwitch</p>
    <p>Egg</p>
  </div>
  <div className=" w-[1300px] py-7 mx-auto grid md:grid-cols-4 xl:grid-cols-4 gap-6">
    <img src={require('../images/i.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/j.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/k.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
    <img src={require('../images/l.jpg')} className="md:w-[210px] md:h-[210px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] rounded-[200px] " alt=""/>
  </div>
  <div className=" w-[1300px] mx-[150px] py-4 text-[20px] font-poppins text-gray-700 font-medium grid md:grid-cols-4 xl:grid-cols-4 ">
    <p>Salad</p>
    <p>Waffle</p>
    <p>Sandwitch</p>
    <p>Egg</p>
  </div>
</div>
  )
}
export default breakfast
