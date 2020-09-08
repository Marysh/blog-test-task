import styled from 'styled-components';

const Flex = styled.div`
  display:flex;
`;

export const Container = styled.div`
    width: 100%;
    background: none;
    margin: 0 auto;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 70px;
    background: linear-gradient(90deg, rgba(201,45,45,1) 42%, rgba(97,1,1,1) 65%, rgba(69,36,36,1) 100%);
    color: #fff;
    display: flex;
    align-items: center;
`;
export const NavLink = styled.div`
    padding: 10px;
    font-size: 20px;
`;

export const PostSection = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const SectionTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
`;

export const PostCard = styled.article`
    text-decoration: none;
    flex: 1 1 301px;
    flex-direction: column;
    overflow: hidden;
    margin: 0 0 40px;
    padding: 0 20px 40px;
    min-height: 220px;
    border-bottom: 1px solid #e9eef1;
    background-size: cover;
`;

export const PostCardImg = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 3px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export const PostTitle = styled.h2`
    color:#000;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
`;

export const PostContent = styled.p`
    margin-bottom: 20px;
`;

export const SubmitBtn = styled.button`
    width: 70px;
    height: 30px;
 `;

export const WarningMsg = styled.div`
    padding-top: 5px;
    padding-left: 10px;
    color: red;
`;