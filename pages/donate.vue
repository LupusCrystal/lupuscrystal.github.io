<template>
    <div>
        <section class="bg-[url('/assets/backgrounds/MountainTwo.webp')]">
            <div class="darkener"></div>

            <div class="w-screen min-h-screen flex flex-row justify-center items-center">
                <ExpandingCard>
                    <div class="flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-32 text-center">
                        <img src="/assets/vector/SupportMe.svg" class="w-full max-w-2xs p-6 heartbeat" >
                        <div>
                            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">Support Me!</h1>
                            <p class="text-2xl">If you want to support me, you can donate <a class="text-red-200 underline" href="https://getmonero.org">Monero XMR</a> to me!</p>
                            <p class="text-2xl"><strong>You do not have Monero XMR? Not a problem!</strong> Just use an exhange to send the funds to my wallet address.</p>
                            <button @click="copyWalletAddress" class="w-full text-3xl font-bold underline border-2 p-3 rounded-full mt-4 transition duration-200 md:hover:scale-105 active:scale-90">Copy Crystal's Monero Wallet Address</button>
                            <p class="text-2xl font-bold mt-4">Or</p>
                            <button @click="openInMoneroWallet" class="w-full text-3xl font-bold underline border-2 p-3 rounded-full mt-4 transition duration-200 md:hover:scale-105 active:scale-90">Open in your Monero wallet</button>
                        </div>
                    </div>
                </ExpandingCard>
            </div>

        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            wallet_address: "8ANc11PjscQdnkUfxSpsuT18j1sJ9uYUrB9G915Xz8mF5cPBYdcKeAb7dGb5K6z2YBPqizMt86ZenDJwTs1acJqYPWL3sTi"
        }
    },
    methods: {
        copyWalletAddress() {
            navigator.clipboard.writeText(this.wallet_address)
            .then(() => {
                console.log('Wallet address copied to clipboard.');
                alert("Copied!")
            })
            .catch(err => {
                console.error('Failed to copy wallet address: ', err);
                alert("Failed to copy the wallet address, check the console for more details.")
            });
        },
        openInMoneroWallet() {
            window.open(`monero:${this.wallet_address}`, '_blank');
        }
    }
}
</script>
<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";
</style>