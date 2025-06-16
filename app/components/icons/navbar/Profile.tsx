const ProfileIcon = (props: { active?: boolean }) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 38" fill="none">
                <path d="M13.0129 17.6085H7.20133C5.00141 24.1459 2.80148 30.6847 0.601562 37.2221C6.86752 37.2001 13.132 37.1767 19.3979 37.1547C17.2701 30.6393 15.1407 24.1239 13.0129 17.6085ZM7.66895 33.1576C8.45863 29.3285 9.24683 25.5008 10.0365 21.6717C10.8012 25.5008 11.5673 29.3285 12.332 33.1576H7.66895Z" opacity={props.active ? "100%" : "40%"} fill="black" />
                <path d="M10.2026 13.624C13.1364 13.624 15.5147 11.2458 15.5147 8.31203C15.5147 5.37828 13.1364 3 10.2026 3C7.2689 3 4.89062 5.37828 4.89062 8.31203C4.89062 11.2458 7.2689 13.624 10.2026 13.624Z" opacity={props.active ? "100%" : "40%"} stroke="black" strokeWidth="4.5" strokeMiterlimit="10" />
            </svg>
        </div>
    );
}

export default ProfileIcon;