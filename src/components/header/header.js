import Button from './button/button';

function Header() {
    return (
        <div>
            <Button bgColor="red" txColor="lime" bgTone="lt-4"/>
            <div>Микрозаймы</div>
            <Button content="Аккаунт" bgColor="indigo" bgTone="dk-4"/>
            <Button content="Настройки"/>
            < a className="waves-effect waves-teal btn-flat"> Button < /a>
                <a className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
);
}

export default Header;