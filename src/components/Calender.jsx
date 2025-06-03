import React from 'react'
import Event from './Event'

const Calender = () => {
  return (
    <div className='calender'>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event='Starbucks Run' color='green' location='123 Main St'/>
                    <td></td>
                    <td></td>
                    <Event event='Taylors Donuts' color='pink' location='456 Maple Ave'/>
                    <td></td>
                    <Event event="1900 Barker" color='blue' location='1900 Barker Rd'/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Mass St.' color='blue' location='800 Mass St'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <Event event='Runza' color='blue' location='321 Burger Ln'/>
                    <td></td>
                    <Event event='Latchkey Deli' color='green' location='789 Sandwich Blvd'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='KU Basketball' color='pink' location='1651 Naismith Dr'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time"> 4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time"> 5 pm</td>
                    <Event event='Burger Stand' color='green' location='803 Mass St'/>
                    <td></td>
                    <td></td>
                    <Event event='La Estrella' color='blue' location='780 New Hamp St'/>
                    <td></td>
                    <Event event="Logies" color='red' location='729 New Hamp St'/>
                    <td></td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}

export default Calender;