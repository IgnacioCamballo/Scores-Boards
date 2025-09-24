export type GeneralContextProps = {
  lenguage: string,
  addsInitialized: boolean,
  modalMenu: boolean,
  fontLoaded: boolean,
  setLenguage: React.Dispatch<React.SetStateAction<string>>,
  setModalMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export type PlayerType = {
  key: number,
  name: string,
  points: number
}

export type FarkleContextProps = {
  players: PlayerType[],
  playerModal: boolean,
  whosOpen: number,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>,
  setPlayerModal: React.Dispatch<React.SetStateAction<boolean>>,
  setWhosOpen: React.Dispatch<React.SetStateAction<number>>
}

export type ClassicContextProps = {
  players: PlayerType[],
  playerModal: boolean,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>,
  setPlayerModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export type PlayerGeneralaType = {
  key: number,
  name: string,
  scores: {
    one: number,
    two: number,
    three: number,
    four: number,
    five: number,
    six: number,
    straight: number,
    full: number,
    poker: number,
    generala: number,
    doubleGenerala: number
  },
}

export type GeneralaContextProps = {
  players: PlayerGeneralaType[],
  playerModal: boolean,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerGeneralaType[]>>,
  setPlayerModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export type TeamsType = {
  teamA: number,
  teamB: number
}

export type TrucoContextProps = {
  scores: TeamsType,
  setScores: React.Dispatch<React.SetStateAction<TeamsType>>
}