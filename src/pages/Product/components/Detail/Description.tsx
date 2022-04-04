import React from 'react'

import { Button, Radio, RadioGroup } from '@components/Form'

const Tags = [
  'x 10 טירפה םש',
  'x 10 טירפה םש',
  'x 10 טירפה םש',
  'x 10 טירפה םש',
  'x 10 טירפה םש',
  'x 10 טירפה םש',
  'x 10 טירפה םש',
]

const Description: React.FC = () => {
  const [value, setValue] = React.useState('')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <div className="info-box">
      <div className="title">
        <h1>
          <i>The blackout</i>
        </h1>
        <p>
          תודיחי 200 םומינימ | מ"עמ + הדיחיל <b>ח"ש 200</b>
        </p>
      </div>
      <div className="details">
        <h2>
          קיחדהל ידכ ךירצש המ לכ םע תמלשומה הנתמה
          <br />
          .האב הנש דע .גחה תוערואמ תא
        </h2>
        <h3>
          <u>:ללוכ טיקה</u>
        </h3>
        {Tags.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <h3>
          <u>:הקפסא ינמז</u>
        </h3>
        <p>14.04.2022 | 14:00 העשה דע | יעיבר םוי</p>
        <h3>
          <u>:חולשמ יטרפ</u>
        </h3>
        <RadioGroup value={value} onChange={handleRadioChange}>
          <Radio label="(ביבא לת ,34 לזרבה) הרבחה ידרשמל םניח חולשמ" />
          <Radio label="(ונתיא ורבד) םולשת תפסותב םידבועה יתבל חולשמ" />
        </RadioGroup>
      </div>
      <div className="summary">
        <div className="total-wrap">
          <p>םניח חולשמ | מ"עמ + ח"ש 40,000 | תודיחי 200</p>
        </div>
        <div className="text-wrap">
          <p>
            ינא ,םוקמה הז זא ךירצו הדימב רותפכה לעמ בותכל םיצורש עדימ דוע
            <br />
            .אורקל והשמ דוע םע םהל עירפהל אלו ונקיו וצחלי טושפ םהש דעב
          </p>
        </div>
        <div className="btn-wrap">
          <Button
            type="button"
            className="main-btn"
            onClick={() => {
              return
            }}
            children="הנמזה עוציב"
          />
        </div>
      </div>
    </div>
  )
}

export default Description
