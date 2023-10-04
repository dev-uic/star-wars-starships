import Link from 'next/link';

interface ListItemProps {
    ordered?: boolean;
    listItems: Array<{ text: string; url: string }> | string[];
    parentClass?: string;
    itemClass?: string;
}

const ListItem = ({
    ordered = false,
    listItems,
    parentClass,
    itemClass,
}: ListItemProps) => {
    const ListTag = ordered ? 'ol' : 'ul';

    return (
        <ListTag className={parentClass}>
            {listItems.map((item) => {
                if (typeof item === 'string') {
                    return (
                        <li key={item} className={itemClass}>
                            {item}
                        </li>
                    );
                } else {
                    return (
                        <li key={item.url} className={itemClass}>
                            <Link href={item.url}>{item.text}</Link>
                        </li>
                    );
                }
            })}
        </ListTag>
    );
};

export default ListItem;
