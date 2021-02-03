import React from 'react';
import MenuItems from './MenuItems';

//Below Class Is For Menu Options Which We Get After Clicking On Burger Line Button
class Menu extends React.Component
{
    render()
    {
        const { selectedOption } = this.props;
        return (
            <div className="screen-menu">
                <div className="app-logo">
                    <h3><i>Mini - iPOD</i></h3>
                </div>
                <MenuItems
                    optionsInMenu={this.props.optionsInMenu}
                    selectedOption={selectedOption}
                />
            </div>
        )
    }
}

export default Menu;