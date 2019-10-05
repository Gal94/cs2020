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
                    לאחר שהאתר עליו רובנו נשענו במהלך התואר החליט לגבות מאיתנו תרומות בכדי שנקבל גישה לדרייב החלטתי להרים לו תחלופה.<br/>
                    חשוב לי שתמיד תהיה גישה לאתר ולתוכן הדרייב. לרשותכם לינק לתיקייה הראשית של הדרייב ולקבצי האתר במידה ותרצו להריץ את האתר בצורה לוקלאית.
                    </p>
                <div className='home-links'>
                    <ModuleButton key='1' homeButton name={'קישור לדרייב'} link={'https://mega.nz/#F!0xoDQa4C!YExO6_uc7KhhO9IivYi8Fw'}/>
                    <ModuleButton key='2' homeButton name={'קבצי האתר'} link={'https://github.com/Gal94/cs2020'}/>
                </div>

            </div>
            <div className='wrap top'>
                <h2 className='desc'>מצב האתר:</h2>
                <p className='text'>היה חשוב לי להעלות את האתר כמה שיותר מהר, מצבו כרגע מספק בשביל לשתף אך הוא רחוק מלהיות גמור.
                <br/>
                הדרייב הוא איננו הדרייב של cs17 אלא גרסה ישנה יותר, עקב כך לא כל הסיכומים/קורסים מופיעים בו.
                    <br/>
                    אני מודע לכך שהאתר איננו רספונסיבי עבור כל מכשירי המובייל, אטפל בכך ובעוד דברים בימים הקרובים(בכל זאת תקופת מבחנים).

                </p>
            </div>
            <div className='wrap'>
                <h4 className='desc'>אז מהו בעצם פרויקט CS?</h4>
                <p className='text'>
                    למעשה מדובר בכונן דרייב שיתופי המכיל סיכומים, מבחנים ופתרונות של סטודנטים למדעי המחשב ממכללת HIT.<br/>
                    מטרת האתר והדרייב היא לספק כלי עזר נוסף לסטודנטים למדעי המחשב להצליח בתואר. <br/>
                    הדרייב מכיל חומרים משנים קודמות, לכן ייתכן כי חלק מהקורסים יצאו מתוכנית הלימודים וחלק מהקורסים מעודכנים פחות מאחרים.
                </p>
            </div>
            <div className='wrap'>
                <h4 className='desc'>פיתוח הדרייב</h4>
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
