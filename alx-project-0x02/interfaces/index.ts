export interface CardProps {
  title: string,
  content: string,
}

export interface PostData {
  title: string,
  content: string,
}

export interface PostModalProps{
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (data: PostData) => void,
}

export interface ButtonProps {
    size: string,
    shape: string,
    text: string
}

export interface PostProps {
  title: string,
  content: string,
  userId: number
}

export interface UserProps {
  name: string,
  email: string,
  address: string
}