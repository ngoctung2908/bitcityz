import React, { useState } from 'react'
import { useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'

import WalletModal from '../modal/WalletModal/WalletModal'

import '../../assets/index.css'
import bg from '../../assets/images/bg-header.png'
import logo from '../../assets/images/logo.svg'
import walletSvg from '../../assets/images/wallet.svg'
import textSvg from '../../assets/images/text.svg'

function Header() {
  const [showWalletModal, setShowWalletModal] = useState(false)

  const { login, logout } = useAuth()
  const { t } = useTranslation()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)
  const { account } = useWeb3React()

  const truncateAddress = (address) => {
    if (!address || address.length < 10) return address

    const separator = '...'
    const sepLen = separator.length

    const charsToShow = address.length - sepLen
    const frontChars = Math.ceil(charsToShow / 5)
    const backChars = Math.ceil(charsToShow / 5)
    return address.substr(0, frontChars) + separator + address.substr(address.length - backChars)
  }

  const _handleShowWalletModal = () => {
    setShowWalletModal(true)
  }

  const _handleCloseModal = () => {
    setShowWalletModal(false)
  }

  return (
    <>
      {showWalletModal && <WalletModal onClose={_handleCloseModal} />}
      <header
        className="bg-cover bg-center bg-no-repeat relative bg-[#050e21]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <nav className="layout-container h-[70px] flex items-center">
          <img src={logo} className="mr-8" alt="" />
          <ul className="flex items-center gap-x-4 list-none">
            <li>
              <a href="aa" className="text-sm text-[#F5F5F5] font-semibold">
                Launchpad
              </a>
            </li>
            <li>
              <a href="aa" className="text-sm text-[#F5F5F5] font-semibold">
                Launchpool
              </a>
            </li>
            <li>
              <a href="aa" className="text-sm text-[#F5F5F5] font-semibold">
                Github
              </a>
            </li>
            <li>
              <a href="aa" className="text-sm text-[#F5F5F5] font-semibold">
                Document
              </a>
            </li>
          </ul>
          {!account ? (
            <button
              type="button"
              onClick={onPresentConnectModal}
              className="ml-auto text-[#212121] text-sm font-semibold flex items-center bg-[#2CE7FF] shadow-blue border-none rounded-2xl py-[7px] px-4"
            >
              <img src={walletSvg} className="mr-3" alt="" />
              <span>Connect wallet</span>
            </button>
          ) : (
            <button
              onClick={() => _handleShowWalletModal()}
              type="button"
              className="ml-auto text-[#212121] text-sm font-semibold flex items-center bg-[#2CE7FF] shadow-blue border-none rounded-2xl py-[7px] px-4"
            >
              <img src={walletSvg} className="mr-3" alt="" />
              <span>{truncateAddress(account)}</span>
            </button>
          )}
        </nav>
        <div className="layout-container text-center py-[110px]">
          <img src={textSvg} className="mx-auto" alt="" />
          <h2 className="text-center text-[#7BF5FB] font-bold text-[32px] text-shadow">BITCITYZ LAUNCHPAD</h2>
          <h2 className="text-center text-[#F5F5F5] font-bold text-[44px]">CITY OF THE HIDDEN GEMS</h2>
          <p className="text-[#F5F5F5] text-center max-w-[547px] mx-auto mt-6">
            In just a few simple steps, you can own your hidden gems by participating in IDO and IGO of high-quality
            projects.
          </p>
          <div className="flex items-center justify-center mt-7 gap-x-10">
            <button
              type="button"
              className="bg-[#7BF5FB] rounded-[20px] border-none text-black font-semibold py-3 px-[38px] shadow-blue"
            >
              Join Launchpad
            </button>
            <button
              type="button"
              className="bg-transparent border-[#7BF5FB] border-solid border-[1px] rounded-[20px] text-[#7BF5FB] font-semibold py-3 px-4"
            >
              Learn about Launchpad
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
