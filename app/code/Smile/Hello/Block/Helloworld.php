<?php
/**
 * Created by PhpStorm.
 * User: sviatoslav
 * Date: 01.07.18
 * Time: 15:29
 */

namespace Smile\Hello\Block;

class Helloworld extends \Magento\Framework\View\Element\Template
{
    public function getHelloWorldTxt()
    {
        return 'Hello world!';
    }
}