import webdev from '../Components/LottieJson/webdev.json'
import business from '../Components/LottieJson/business.json'
import product from '../Components/LottieJson/product.json'
import cyber from '../Components/LottieJson/cyber.json'
import blockchain from '../Components/LottieJson/blockchain.json'
import data from '../Components/LottieJson/data.json'
import robotics from '../Components/LottieJson/robotics.json'


export const courses = [
    {
        name: 'Web and App Development',
        image: webdev,
        courses: 15,
        workshops: 2,
        details: {
            courses: [
                {
                    thumbnail: "https://cdn.ostad.app/course/photo/2023-06-20T17-42-08.615Z-Website%20Image%20(33).jpg",
                    name: "Flutter Development",
                    price: "7000"
                },
                {
                    thumbnail: "https://cdn.ostad.app/course/photo/2023-07-17T12-35-10.123Z-Website%20Image%20(42).jpg",
                    name: "JavaScript",
                    price: "6500"
                }
            ],
            instructor: {
                name: "AS. Faruq",
                image: "https://cdn.ostad.app/user/avatar/2023-06-19T07-24-16.858Z-1680577023608.jpg",
                details: "Senior Associate (Pentest Lead) at TRS Group of Companies"
            }

        }
    },
    {
        name: 'Business and Marketing',
        image: business,
        courses: 3,
        workshops: 5
    },
    {
        name: 'Product Design',
        image: product,
        courses: 7,
        workshops: 3
    },
    {
        name: 'Cyber Security',
        image: cyber,
        courses: 2,
        workshops: 0,
        details: {
            courses: [
                {
                    thumbnail: "https://cdn.ostad.app/course/photo/2023-06-20T17-42-08.615Z-Website%20Image%20(33).jpg",
                    name: "Cyber Security and Ethical Hacking",
                    price: "7000"
                },
                {
                    thumbnail: "https://cdn.ostad.app/course/photo/2023-07-17T12-35-10.123Z-Website%20Image%20(42).jpg",
                    name: "Fundamentals of Cyber Security",
                    price: "6500"
                }
            ],
            instructor: {
                name: "Jubaer Al Nazi",
                image: "https://cdn.ostad.app/user/avatar/2023-06-19T07-24-16.858Z-1680577023608.jpg",
                details: "Senior Associate (Pentest Lead) at TRS Group of Companies"
            }
        }

    },
    {
        name: 'Blockchain Development',
        image: blockchain,
        courses: 1,
        workshops: 1

    },
    {
        name: 'Data Engineering',
        image: data,
        courses: 4,
        workshops: 1

    },
    {
        name: "Arduino Coding",
        image: robotics,
        courses: 4,
        workshops: 1,
        products: [
            {
                name: 'Arduino Nano',
                image: 'https://store-usa.arduino.cc/cdn/shop/products/A000005_03.front_2c44e4db-5d01-45ec-9b14-78b6df214913_804x603.jpg?v=1628695116',
                description: "The Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328 (Arduino Nano 3.x). It has more or less the same functionality of the Arduino Duemilanove, but in a different package. It lacks only a DC power jack, and works with a Mini-B USB cable instead of a standard one.",
                circuit: "https://content.arduino.cc/assets/Pinout-NANO_latest.png",
                price: "2490"
            },
            {
                name: 'Arduino Micro',
                image: 'https://store-usa.arduino.cc/cdn/shop/products/A000053_03.front._804x603.jpg?v=1627401819',
                description: 'The Micro is a microcontroller board based on the ATmega32U4 (datasheet), developed in conjunction with Adafruit. It has 20 digital input/output pins (of which 7 can be used as PWM outputs and 12 as analog inputs), a 16 MHz crystal oscillator, a micro USB connection, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a micro USB cable to get started. It has a form factor that enables it to be easily placed on a breadboard.\n The Micro board is similar to the Arduino Leonardo in that the ATmega32U4 has built-in USB communication, eliminating the need for a secondary processor. This allows the Micro to appear to a connected computer as a mouse and keyboard, in addition to a virtual (CDC) serial / COM port.',
                circuit: 'https://content.arduino.cc/assets/Pinout-Micro_latest.png',
                price: '2490'
            },
            {
                name: 'ARDUINO UNO WiFi REV2',
                image: 'https://store-usa.arduino.cc/cdn/shop/products/ABX00021_03.front_89330d8b-5527-448c-b227-e297a159eba3_1000x750.jpg?v=1626444977',
                description: "The Arduino UNO WiFi Rev.2 is the easiest point of entry to basic IoT with the standard form factor of the UNO family. Whether you are looking at building a sensor network connected to your office or home router, or if you want to create a Bluetooth® Low Energy device sending data to a cellphone, the Arduino UNO WiFi Rev.2 is your one-stop-solution for many of the basic IoT application scenarios.\n Add this board to a device and you'll be able to connect it to a WiFi network, using its secure ECC608 crypto chip accelerator. The Arduino Uno WiFi is functionally the same as the Arduino Uno Rev3, but with the addition of WiFi / Bluetooth® and some other enhancements. It incorporates the brand new ATmega4809 8-bit microcontroller from Microchip and has an onboard IMU (Inertial Measurement Unit) LSM6DS3TR. \n The Wi-Fi Module is a self-contained SoC with integrated TCP/IP protocol stack that can provide access to a Wi-Fi network, or act as an access point. It is the u-blox NINA-W102 and (here) you find the datasheet.\n The Arduino UNO WiFi Rev.2 has 14 digital input/output pins—5 can be used as PWM outputs—6 analog inputs, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller. Simply connect it to a computer with a USB cable or power it with an AC adapter or battery to get started.",
                circuit: 'https://content.arduino.cc/assets/Pinout-UNOwifirev2_latest.png',
                price: '5380'
            },

            {
                name: 'Arduino Mega 2560 Rev3',
                image: 'https://store-usa.arduino.cc/cdn/shop/products/A000067_00.front_804x603.jpg?v=1637830354',
                description: 'The Arduino Mega 2560 is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 15 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. The Mega 2560 board is compatible with most shields designed for the Uno and the former boards Duemilanove or Diecimila \n The Mega 2560 is an update to the Arduino Mega, which it replaces.',
                circuit: 'https://content.arduino.cc/assets/Pinout-Mega2560rev3_latest.png',
                price: '4840'
            },
            {
                name: 'Arduino GIGA R1 WiFi',
                image: 'https://store-usa.arduino.cc/cdn/shop/products/ABX00063_00.default_804x603.jpg?v=1677493878',
                description: "The Arduino GIGA R1 WiFi is designed for ambitious makers who want to step up their game. It levels the playing field for gamers, artists, sound designers and anyone coming to the tech world with big ideas on a budget – because it packs advanced features into an accessible component, with the same form factor as our popular Mega and Due.\n Let’s break down all the powerful features of this board. \n Microcontroller (STM32H747XI): This dual core 32-bits microcontroller allows you have two brain talking to each other (a Cortex®-M7 at 480 MHz and a Cortex®-M4 at 240 MHz) you can even run micropython in one and Arduino in the other. \n Wireless communication (Murata 1DX):  Whether you prefer Wi-Fi® or Bluetooth®, the GIGA R1 WiFi got you covered. You can even quickly connect to the Arduino IoT Cloud and keep track of your project remotely. And if you are concerned about the security of the communication, the ATECC608A keeps everything under control. \n Hardware ports and communication: Following the legacy of the Arduino Mega and the Arduino Due, the GIGA R1 WiFi has 4 UARTs (hardware serial ports), 3 I2C ports (1 more than its predecessors), 2 SPI ports (1 more than its predecessors), 1 FDCAN. \n GPIOs and extra pins: We wanted to keep the same form factor of the Mega and the Due, so you can easily adapt your custom made shields to the GIGA R1 WiFi (remember this board works at 3.3V though!) and we added extra headers to access extra pins, leaving the total count to 76 GPIO pins, and the best part, you can access them from underneath, so keep your project as it is and just think on how to expand it. Also, we added two new pins: a VRTC so you can connect a battery to keep the RTC running while the board is off and an OFF pin so you can shut down the board.",
                circuit: 'https://content.arduino.cc/assets/ABX00063-pinout.png',
                price: '7282'
            }
        ]

    }
]
