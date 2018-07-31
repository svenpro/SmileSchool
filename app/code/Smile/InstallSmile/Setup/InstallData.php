<?php
/**
 * Created by PhpStorm.
 * User: sviatoslav
 * Date: 25.07.18
 * Time: 18:48
 */
namespace Smile\InstallSmile\Setup;

use Magento\Cms\Api\Data\PageInterface;
use Magento\Cms\Api\Data\PageInterfaceFactory;
use Magento\Cms\Api\PageRepositoryInterface;
use Magento\Cms\Api\BlockRepositoryInterface;
use Magento\Cms\Api\Data\BlockInterface;
use Magento\Cms\Api\Data\BlockInterfaceFactory;
use Magento\Framework\Setup\InstallDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

class InstallData implements InstallDataInterface
{
    /**
     * @var BlockRepositoryInterface
     */
    private $blockRepository;
    /**
     * @var BlockInterfaceFactory
     */
    private $blockInterfaceFactory;
    /**
     * @var PageRepositoryInterface
     */
    private $pageRepository;
    /**
     * @var PageInterfaceFactory
     */
    private $pageInterfaceFactory;

    public function __construct(
        BlockRepositoryInterface $blockRepository,
        BlockInterfaceFactory $blockInterfaceFactory,
        PageRepositoryInterface $pageRepository,
        PageInterfaceFactory $pageInterfaceFactory
    ) {
        $this->blockRepository = $blockRepository;
        $this->blockInterfaceFactory = $blockInterfaceFactory;
        $this->pageRepository = $pageRepository;
        $this->pageInterfaceFactory = $pageInterfaceFactory;
    }

    /**
     * Installs data for a module
     *
     * @param ModuleDataSetupInterface $setup
     * @param ModuleContextInterface $context
     * @return void
     */
    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $this->createCmsBlock();
    }


    /**
     * Create a CMS block
     */
    public function createCmsBlock()
    {
        /** @var BlockInterface $cmsBlock */


        $cmsBlock = $this->blockInterfaceFactory->create();

        $cmsBlock->setIdentifier('NewFooter_3242')
            ->setTitle('NewFooter 1')
            ->setContent('<div class="footer-container">
<h3>Products</h3>
<ul>
<li><a>All-on-4</a></li>
<li><a>Abutments</a></li>
<li><a>Branemark System</a></li>
<li><a>creos</a></li>
<li><a>NobelActive</a></li>
<li><a>Drill units</a></li>
<li><a>Store</a></li>
</ul>
</div>')
            ->setData('stores', [0]);

        $this->blockRepository->save($cmsBlock);



        $cmsBlock2 = $this->blockInterfaceFactory->create();

        $cmsBlock2->setIdentifier('NewFooter_2')
            ->setTitle('NewFooter 2')
            ->setContent('
               <div class="footer-container">
<h3>Courses</h3>
<ul>
<li><a>Fundamental treatment</a></li>
<li><a>Advanced treatment</a></li>
<li><a>Complex treatment</a></li>
<li><a>Dental professional</a></li>
<li><a>education</a></li>
<li><a>Speakers</a></li>
<li><a>Catalog</a></li>
</ul>
</div>
            ')
            ->setData('stores', [0]);

        $this->blockRepository->save($cmsBlock2);


        $cmsBlock3 = $this->blockInterfaceFactory->create();


        $cmsBlock3->setIdentifier('NewFooter_3')
            ->setTitle('NewFooter 3')
            ->setContent('
<div class="footer-container">
<h3>Services</h3>
<ul>
<li><a>Authentication tool</a></li>
<li><a>Customer programs</a></li>
<li><a>Customer service</a></li>
<li><a>FAQs</a></li>
<li><a>Instructions for use</a></li>
<li><a>Track and trace</a></li>
<li><a>Grant application</a></li>
</ul>
</div>
            ')
            ->setData('stores', [0]);

        $this->blockRepository->save($cmsBlock3);



        $cmsBlock4 = $this->blockInterfaceFactory->create();

        $cmsBlock4->setIdentifier('NewFooter_4')
            ->setTitle('NewFooter 4')
            ->setContent('
<div class="footer-container">
<h3>Company</h3>
<ul>
<li><a>About Us</a></li>
<li><a>Jobs</a></li>
<li><a>Events</a></li>
<li><a>Investor Relations</a></li>
<li><a>Media releases</a></li>
<li><a>Symposia</a></li>
</ul>
</div>
            ')
            ->setData('stores', [0]);

        $this->blockRepository->save($cmsBlock4);



        $cmsBlock5 = $this->blockInterfaceFactory->create();


        $cmsBlock5->setIdentifier('NewFooter_5')
            ->setTitle('NewFooter 5')
            ->setContent('
<div class="footer-container subscribe">
<h3>Singup for monthly newsletter</h3>
<p>Get the latest industry news, product infomation and more.</p>
<button>subscribe</button>
<h3>Connect with us</h3>
<div class="social-content"><a><img src="{{store url=""}}pub/static/frontend/Smile/megatheme/en_US/images/if_Socialmedia_icons_Facebook_433084.svg" /></a></div>
<div class="social-content"><a><img src="{{store url=""}}pub/static/frontend/Smile/megatheme/en_US/images/if_youtube_square_gray_107039.svg" /></a></div>
<div class="social-content"><a><img src="{{store url=""}}pub/static/frontend/Smile/megatheme/en_US/images/if_Socialmedia_icons_Google_Plus_433088.svg" /></a></div>
<div class="social-content"><a><img src="{{store url=""}}pub/static/frontend/Smile/megatheme/en_US/images/if_Socialmedia_icons_Twitter-07_433076.svg" /></a></div>
</div>
            ')
            ->setData('stores', [0]);


        $this->blockRepository->save($cmsBlock5);

    }
}