import React from "react";

function Contacts(){
    return (
        <div className='pageWrapper'>
            <div className='contentWrapper'>
                <h1 className='contanctTitle'>My Contact</h1>
                <div className='contants'>
                    <p><a href='https://www.linkedin.com/in/andrey-chernenkov-b35926200/'>LinkIden</a></p>
                    <p><a href='https://t.me/andry_y'>Telegram (@andry_y)</a></p>
                    <p>Email: chernenkovdeveloper@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts;