<div class="container">
    <h2 class="section-title">Featured <span class="highlight">Projects</span></h2>
    <div class="projects-grid">
        <?php
        $projects = [
            [
                'image' => 'assets/images/photo_2025-02-02_20-46-26.jpg',
                'live_url' => '#',
                'github_url' => '#',
                'title' => 'E-commerce Platform',
                'description' => 'A full-featured online shopping platform with payment integration and inventory management.',
                'tech' => ['React', 'Node.js', 'MongoDB', 'Stripe API']
            ],
            [
                'image' => 'assets/images/ai-project.jpg', // Replace with your actual image
                'live_url' => '#',
                'github_url' => '#',
                'title' => 'Train Amharic Language Model',
                'description' => 'Train Amharic language model to answer in Amharic.',
                'tech' => ['Python', 'TensorFlow', 'NLTK', 'Flask']
            ],
            [
                'image' => 'assets/images/portfolio-template.jpg', // Replace with your actual image
                'live_url' => '#',
                'github_url' => '#',
                'title' => 'Portfolio Template',
                'description' => 'A responsive portfolio template with modern animations and interactive elements.',
                'tech' => ['HTML/CSS', 'JavaScript', 'Responsive Design']
            ]
        ];
        
        foreach ($projects as $project): ?>
        <div class="project-card">
            <div class="project-image">
                <img src="<?= $project['image'] ?>" alt="<?= $project['title'] ?>">
                <div class="project-links">
                    <?php if ($project['live_url'] != '#'): ?>
                        <a href="<?= $project['live_url'] ?>" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    <?php endif; ?>
                    <?php if ($project['github_url'] != '#'): ?>
                        <a href="<?= $project['github_url'] ?>" class="project-link" target="_blank"><i class="fab fa-github"></i></a>
                    <?php endif; ?>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title"><?= $project['title'] ?></h3>
                <p class="project-description"><?= $project['description'] ?></p>
                <div class="project-tech">
                    <?php foreach ($project['tech'] as $tech): ?>
                        <span><?= $tech ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>