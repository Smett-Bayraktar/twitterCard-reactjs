import { useState } from "react"

export function TwitterFollowCard ({userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' :
    'tw-followCard-button'

    

    return (
        <article className='tw-followCard'>

            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                 src={`https://unavatar.io/twitter/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>

        </article>
    )
}