import {Button, ButtonGroup, Container, Typography} from "@mui/material";

type FuncExprComponentProps = {
    title?: string;
    variant?: 'text' | 'outlined' | 'contained'
}

export const FuncExprComponent: React.FC<FuncExprComponentProps> = ({title}) => (
    <div>
        <Container maxWidth="sm" sx={{p: 2}}>
            <Typography variant={"h3"}>
                {title}
            </Typography>
            <ButtonGroup variant="contained" aria-label="outlined primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Container>
    </div>
)