import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";


const Row = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Container = styled.ul`
  padding-inline-start: 20px;
`;

const Label = styled.span`
  color: #001f3f;
`;

const Button = styled.button`
  font-weight: bold;
  color: #ffffff;
  background-color: #0074d9;
  border-radius: 4px;
  padding: 4px;
  padding-right: 10px;
  padding-left: 10px;
`;

const ResetButton = styled(Button)`
  background-color: #ff851b;
  margin-left: 10px;
  margin-right: 8px;
`;

const ArchivedLabel = styled(Label)`
  margin-left: 24px;
  font-size: 12px;
`;

const byArchived = archivedItems => item => !archivedItems.includes(item.id);

const List = ({className, list}) => {
    const [archivedItems, setArchivedItems] = React.useState(JSON.parse(localStorage.getItem('archived')));
    console.log(typeof list)
    const handleArchive = id => {
        if (localStorage.getItem('archived') === null) {
            let archivedItems = [];
            archivedItems.push(id);
            localStorage.setItem('archived', JSON.stringify(archivedItems));
        } else {
            let archivedItems = JSON.parse(localStorage.getItem('archived'));
            archivedItems.push(id);
            localStorage.setItem('archived', JSON.stringify(archivedItems));
        }
        setArchivedItems(JSON.parse(localStorage.getItem('archived')));

    };

    const resetArchive = () => {
        localStorage.setItem('archived', JSON.stringify([]));
        setArchivedItems([])
    }

    return (
        <React.Fragment>
            <Container className={className}>
                {list.filter(byArchived(archivedItems)).map(item => (
                    <Row key={item.id}>
                        <Label>{item.name}</Label>
                        <Button type="button" onClick={() => handleArchive(item.id)}>
                            Archive
                        </Button>
                    </Row>
                ))}
            </Container>
            <ArchivedLabel>
                {archivedItems.length} item{archivedItems.length === 1 ? "" : "s"}{" "}
                archived...
            </ArchivedLabel>
            {archivedItems.length > 0 && (
                <ResetButton onClick={() => resetArchive()}>
                    Reset Archived
                </ResetButton>
            )}
        </React.Fragment>
    );
};

List.propTypes = {
    className: PropTypes.string,
    list: PropTypes.array.isRequired,
    archivedItems: PropTypes.array.isRequired,
    setArchivedItems: PropTypes.func.isRequired,
};

export {List};
export default List;
