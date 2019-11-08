import React from 'react';
import { HomepageContainer, TextContainer,
    DescriptionH2, DescriptionH3, HeadDescriptionContainer} from "./homepage.styles";
import ModuleButton from "../../components/module-button/ModuleButton.component";

const HomePage = () => {
    return(
    <HomepageContainer>
        <HeadDescriptionContainer>
            <div className='wrap top'>
                <DescriptionH2>שלום לכולם!</DescriptionH2>
                <TextContainer>
                    ברוכים הבאים לcs20. אתר שמטרתו לעזור לסטודנטים למדעי המחשב לעבור את התואר בהצלחה.<br/>
                    לרשותכם לינק לתיקייה הראשית של הדרייב ולקבצי האתר במידה ותרצו להוריד את הדרייב או להריץ את האתר בצורה לוקלאית.
                </TextContainer>
                <div className='home-links'>
                    <ModuleButton key='1' homeButton name={'Google drive'} link={'https://drive.google.com/drive/folders/1Mmh1MW_zwNyqhNDB1gtkeklA4w_kHV5V?usp=sharing'}/>
                    <ModuleButton key='2' homeButton name={'Mega drive'} link={'https://mega.nz/#F!0xoDQa4C!YExO6_uc7KhhO9IivYi8Fw'}/>
                    <ModuleButton key='3' homeButton name={'קבצי האתר'} link={'https://github.com/Gal94/cs2020'}/>
                </div>

            </div>
            <div className='wrap top'>
                <DescriptionH3>אז מהו בעצם פרויקט CS?</DescriptionH3>
                <TextContainer>
                    למעשה מדובר בכונן דרייב שיתופי המכיל סיכומים, מבחנים ופתרונות של סטודנטים למדעי המחשב ממכללת HIT.<br/>
                    מטרת האתר והדרייב היא לספק כלי עזר נוסף לסטודנטים למדעי המחשב להצליח בתואר. <br/>
                    הדרייב מכיל חומרים משנים קודמות, לכן ייתכן כי חלק מהקורסים יצאו מתוכנית הלימודים וחלק מהקורסים מעודכנים פחות מאחרים.
                </TextContainer>
            </div>
            <div className='wrap'>
                <DescriptionH3>פיתוח הדרייב</DescriptionH3>
                <TextContainer>
                    הדרייב והאתר הוקמו ע"י סטודנטים למען סטודנטים, מעוניינים לתרום לפיתוח פרוייקט CS?<br/>
                    אשמח לקבל סיכומים, מבחנים וכל חומר שעשוי לסייע בהמשך פיתוח הדרייב.<br/>
                    חומרים, הצעות וביקורות יתקבלו בברכה במייל הבא:<br/>
                    <span className='mail'>cs2020submissions@outlook.com</span>
                </TextContainer>
            </div>
        </HeadDescriptionContainer>
    </HomepageContainer>
)};

export default HomePage;
