interface ParagraphProps {
    copy: string[];
    containerClass?: string;
}

const Paragraphs = ({ copy, containerClass }: ParagraphProps) => {
    return (
        <div className={containerClass}>
            {copy.map((para, idx) => {
                return <p key={idx}>{para}</p>;
            })}
        </div>
    );
};

export default Paragraphs;
