import React from "react";
import '../modules/WeeklyEvents.modules.css';


export default function WeeklyEvents() {
    return (
        <>
        
        <div className="weekly-events">
            <div className="weekly-events-heading">
                <h2>Weekly Events</h2>
            </div>
            <div className="weekly-events-content">
                <p>We show live sports on four screens, so you won’t miss a moment.</p>
                <table>
                    <tbody>
                    <tr>
                        <th>Tuesdays:</th>
                        <td>Quiz starting at 20:00</td>
                    </tr>
                    <tr>
                        <th>Friday:</th>
                        <td>Lønningspils</td>
                    </tr>
                    <tr>
                        <th>Sunday:</th>
                        <td>Industry night</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}