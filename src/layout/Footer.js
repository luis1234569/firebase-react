import React from 'react'

function Footer() {
  return (
    <footer className="bg-cyan-950 text-slate-400 text-sm py-6 px-8">
        <div className="flex justify-around flex-wrap">
            <div className="">E-mail: lav.ruiz@yavirac.edu.ec</div>
            <div className="">©2023-Copyright-none</div>
            <div className="flex">
            <a href="https://www.facebook.com/"><i className="material-icons">facebook</i></a>
            <a href="https://github.com/luis1234569"><i className="material-icons">github</i></a>
            <a href="https://www.instagram.com/"><i className="material-icons">instagram</i></a>
            <a className='animate-load' href="https://www.instagram.com/"><i className="material-icons">instagram</i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer