import { HeaderContainer } from './styles'

interface HeaderProps {
    title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
        { title }
    </HeaderContainer>
  )
}
