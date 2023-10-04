import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';

interface HeaderProps {
    imgUrl: string;
}

const Header = ({ imgUrl }: HeaderProps) => {
    return (
        <header className={styles.header} data-testid="header">
            <div className="content">
                <Link href="/">
                    <Image
                        src={imgUrl}
                        width={96}
                        height={29}
                        alt="Starships"
                        className={styles['header__logo']}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
