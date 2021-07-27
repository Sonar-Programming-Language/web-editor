import { AppContext } from 'context';
import React from 'react';
import ToggleButton from './ToggleButton';
import { FaMoon, FaSun } from 'react-icons/fa';


interface Props { }

const Navbar = (props: Props) => {
    const context = React.useContext(AppContext);

    return (
        <div className={`flex flex-row justify-between py-1 px-4`} style={{ background: context.theme.elevation1, borderBottom: `2px solid ${context.theme.border1}` }}>
            <div>
                <span style={{ fontFamily: 'monospace', fontSize: 16, color: context.theme.fontColor1, fontWeight: `bold` }}>
                    sonar-lang
                </span>
            </div>
            <div>
                <ToggleButton
                    firstChild={
                        <FaSun
                            size={14}
                        // onMouseOver={e => e.currentTarget.style.color = 'blue'}
                        // onMouseOut={e => e.currentTarget.style.color = 'inherit'}
                        />
                    }
                    secondChild={
                        <FaMoon
                            size={14}
                        // onMouseOver={e => e.currentTarget.style.color = '#666'}
                        // onMouseOut={e => e.currentTarget.style.color = 'inherit'}
                        />
                    }
                    selected={1}
                    activeColor={`lightblue`}
                    inactiveColor={`#ccc`}
                    itemHeights={22}
                    onChange={(selected: number) => context.switchTheme(selected == 1 ? 'dark' : 'light')}
                />
            </div>
        </div>
    );
}

export default Navbar;