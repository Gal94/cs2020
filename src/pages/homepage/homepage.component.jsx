import React from 'react';
import './homepage.styles.scss';
import ModuleButton from "../../components/module-button/ModuleButton.component";

const HomePage = () => {
    return(
    <div className='homepage'>
        <div className='head-desc'>
            <div className='wrap top'>
                <h2 className='desc'>שלום לכולם!</h2>
                <p className='text'>
                    ברוכים הבאים לcs20. אתר שמטרתו לעזור לסטודנטים למדעי המחשב לעבור את התואר בהצלחה.<br/>
                    לרשותכם לינק לתיקייה הראשית של הדרייב ולקבצי האתר במידה ותרצו להוריד את הדרייב או להריץ את האתר בצורה לוקלאית.
                    <br/><span style= {{fontSize: 14 + 'px'}}>*בימים הקרובים יעלה קישור לגוגל דרייב.</span>
                </p>
                <div className='home-links'>
                    <ModuleButton key='1' homeButton name={'קישור לדרייב'} link={'https://mega.nz/#F!0xoDQa4C!YExO6_uc7KhhO9IivYi8Fw'}/>
                    <ModuleButton key='2' homeButton name={'קבצי האתר'} link={'https://github.com/Gal94/cs2020'}/>
                </div>

            </div>
            <div className='wrap top'>
                <h3 className='desc'>אז מהו בעצם פרויקט CS?</h3>
                <p className='text'>
                    למעשה מדובר בכונן דרייב שיתופי המכיל סיכומים, מבחנים ופתרונות של סטודנטים למדעי המחשב ממכללת HIT.<br/>
                    מטרת האתר והדרייב היא לספק כלי עזר נוסף לסטודנטים למדעי המחשב להצליח בתואר. <br/>
                    הדרייב מכיל חומרים משנים קודמות, לכן ייתכן כי חלק מהקורסים יצאו מתוכנית הלימודים וחלק מהקורסים מעודכנים פחות מאחרים.
                </p>
            </div>
            <div className='wrap'>
                <h3 className='desc'>פיתוח הדרייב</h3>
                <p className='text'>
                    הדרייב והאתר הוקמו ע"י סטודנטים למען סטודנטים, מעוניינים לתרום לפיתוח פרוייקט CS?<br/>
                    אשמח לקבל סיכומים, מבחנים וכל חומר שעשוי לסייע בהמשך פיתוח הדרייב.<br/>
                    חומרים, הצעות וביקורות יתקבלו בברכה במייל הבא:<br/>
                    <span className='mail'>cs2020submissions@outlook.com</span>
                </p>
            </div>
        </div>
    </div>
)};

export default HomePage;
