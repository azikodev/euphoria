import Link from "next/link";

export function Cards(){
  return(
    <div className="hero " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-3xl">cool / colorful / comfy</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}