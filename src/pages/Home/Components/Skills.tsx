import React from 'react'
import '../style/skills.css'
const SKILLS_LIST = [
    {
        label: 'ReactJS - 90%',
        percentage: '90%',
      },
      {
        label: 'ExpressJs - 85%',
        percentage: '85%',
      },
      {
        label: 'MongoDB - 85%',
        percentage: '85%',
      },
      {
        label: 'Postgres - 85%',
        percentage: '85%',
      },
    {
    label: 'HTML/CSS - 95%',
    percentage: '95%',
  },{
  label: 'Typescript - 85%',
  percentage: '85%',
},
  {
    label: 'Problem Solving - 85%',
    percentage: '85%',
  },

  {
    label: 'Machine Learning - 70%',
    percentage: '75%',
  },
];
console.log(SKILLS_LIST)
const ProgressLine = ({ label, percentage, barBg, progresBg, barHeight }) => {
    const [widths, setWidths] = React.useState(0);

    React.useEffect(() => {
        requestAnimationFrame(() => setWidths(percentage));
    }, [percentage]);

    return (
        <section className="progress-line">
            <span className="progress-line__label">{ label }</span>
            <div 
                className="progress-line__outer"
                style={ {
                    background: barBg,
                    height: `${barHeight}px`,
                    borderRadius: `2px`,
                }}>
                <div 
                    className="progress-line__inner" 
                    style={ {
                        width: widths,
                        background: progresBg,
                        transition: 'width 2s',
                   } } /> 
            </div>
        </section>
    );
};

const Skills = ()=> (
  <section className="skillsContainer">
     <div className="row">
        <div className="skill">
             <h1><span>S</span>kills?</h1>
           </div>
       </div>
      <div className="row">
         <div className="col-12 py-5">
          {
              SKILLS_LIST.map((skill, index) => ( // index: static values
                  <ProgressLine
                      key={ index }
                      barHeight="20"
                      barBg="rgb(136, 136, 136)"
                      progresBg=" rgb(163, 52, 0)"
                      label={ skill.label }
                      percentage={ skill.percentage } /> 
              ))
           }
        </div>
      </div>
    </section>
);

export default Skills;